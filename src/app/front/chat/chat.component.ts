import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, SimpleChange, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { ChatService } from 'src/app/service/chat.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  inputMsg ="";
  user = new User(); //sender:any;
  recipient = new User(); //recipient:any;
  stompClient: any;
  date: any;
   msg:any = [];
   subscription : any;
  chatId: any;
   // entrer
    
   contactList :any;
   public isEmojiPickerVisible: boolean;
  
  constructor(private chatService : ChatService, private userService: UserService,public datepipe: DatePipe,private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.userService.getConnectedUser().subscribe(data => {
      this.user = data as User;
      console.log(" User : ",this.user);
      this.getContacts();
      console.log("--------------1---------------",this.recipient.userName);

    this.stompClient = this.chatService.stompClient;
    if (this.recipient.userName != "undefined") {
      console.log("NOT UNDEFINED",this.recipient.userName);
   this.stompClient.connect({}, () => {
     console.log("coooo");
     this.chatService.getChatId(this.user.userName,this.recipient.userName).subscribe(data=>
      { 
        this.chatId = data;
        console.log("Chat ID",+this.chatId);
        this.connect();
      });
      
    });
    } 
      
      })
   
  console.log("FINAL MSGS LIST--------------------",this.msg);
  }
  
      //-------------------------------------------------------

    connect(){
      console.log("connected");
      console.log("recipient : ",this.recipient.userName);
      console.log("user : ",this.user.userName);

      this.loadChat();
      console.log("chat id connect",this.chatId);
      this.subscription =  this.stompClient.subscribe('/user/'+this.chatId+'/queue/message', (message:any) => {
          if (message.body) {
            console.log("msg", this.msg);
            this.msg.push(JSON.parse(message.body));
            console.log("msg after push",this.msg);
          }});
   
      }
        //-------------------------------------------------------
    loadChat(){
      this.chatService.getMessages(this.user.userName,this.recipient.userName).subscribe(data=> this.msg = data);
    }

    getChatId() 
    {
      this.chatService.getChatId(this.user.userName,this.recipient.userName).subscribe(data=>
        { this.chatId = data;
          console.log("Chat ID",+this.chatId);
        });
    }
    //-------------------------------------------------------


    sendMessage() {     
      console.log('connected to WS');
         
          if (!this.inputMsg) {
              return;
          }
         
          const msg = {
            senderId: this.user.userName,
            recipientId: this.recipient.userName,
            content: this.inputMsg,
            timestamp: new Date(),
           };

        this.stompClient.send("/app/chat", {}, JSON.stringify(msg));
          this.inputMsg="";
          
      }


      convertDate(date: any){
        return this.date = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm');
       }

       public addEmoji(event: any) {
        this.inputMsg = `${this.inputMsg}${event.emoji.native}`;
        this.isEmojiPickerVisible = false;
     }

     countNewMsgs(recipient:any){
       return this.chatService.countNewMsgs(this.user.userName,recipient).subscribe();
     }

     
     onKeyUp(event:any) { 
      this.sendMessage();
    }

    getContacts() {
      this.chatService.getContactList(this.user.idUser).subscribe(data=> this.contactList = data);
    }

    async chatWith(user:any){
    // this.stompClient.disconnect();
    console.log("chat with user",user);
     try { 
      this.recipient = user;
     await console.log("this recip",this.recipient);
      await this.msg.splice(0);
      console.log("new msg list",this.msg);
      if (this.subscription) {
      await this.subscription.unsubscribe();
    }
    await this.chatService.getChatId(this.user.userName,this.recipient.userName).subscribe(data=>
      { 
        this.chatId = data;
        console.log("Chat ID",+this.chatId);
        this.connect();
        this.ngOnInit();
      });
      }catch(error){
        console.log(error);
      }
    }


    
    
}
