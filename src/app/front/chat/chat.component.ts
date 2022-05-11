import { DatePipe } from '@angular/common';
import { Component, OnInit, SimpleChange } from '@angular/core';
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
  chatContent="";
  user = new User(); //sender:any;
  recipient = new User(); //recipient:any;
  stompClient: any;
  date: any;
   msg:any = [];
   subscription : any;

   // entrer
  // idUser = 2 ; 
   contactList :any;
   public isEmojiPickerVisible: boolean;
  
  constructor(private chatService : ChatService,private userService: UserService, public datepipe: DatePipe,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getConnectedUser().subscribe(data =>{ this.user = data as User
      console.log("user : ",this.user);
      this.getContacts();
    })
    this.getContacts();
    console.log("--------------1---------------");
    this.route.paramMap.subscribe(res=>
      {
        console.log("--------------2---------------");
        this.recipient.userName = res.get('user') as string;
        console.log("--------------3---------------",this.recipient.userName);
        
    this.chatContent="";
    this.stompClient = this.chatService.stompClient;
    console.log("--------------4---------------",this.stompClient);


   this.stompClient.connect({}, () => {
     console.log("coooo");
      this.connect();
}); 
    });
  console.log("FINAL MSGS LIST--------------------",this.msg);
  }
  
      //-------------------------------------------------------

    connect(){
      console.log("connected");
      console.log("recipient : ",this.recipient.userName);
      console.log("sender : ",this.user.userName);

      this.loadChat();
      this.chatService.getChatId(this.user.userName,this.recipient.userName).subscribe(data => {
        this.stompClient.subscribe('/user/'+data+'/queue/message', (message:any) => {
          if (message.body) {
            this.msg.push(JSON.parse(message.body));
          }});
      })
      }
        //-------------------------------------------------------
    loadChat(){
      this.chatService.getMessages(this.user.userName,this.recipient.userName).subscribe(data=> this.msg = data);
    }
    //-------------------------------------------------------


   /*  errorCallBack(error:any) {
      var that = this;
      console.log("errorCallBack -> " + error)
      setTimeout(() => {
          that.connect();
      }, 1000);
  } */

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

    chatWith(user:any){
    // this.stompClient.disconnect();
      this.msg.splice(0);
      console.log("new msg list",this.msg);
      this.connect();
      this.router.navigate(['/home/chat', user]);
    }

   /*  async chatWith(user:any){
      // this.stompClient.disconnect();
        this.msg.splice(0);
        console.log("new msg list",this.msg);
        this.chatContent="";
        this.connect();
        await new Promise(f => setTimeout(f, 5000));
        this.router.navigate(['chat', user]);
      } */

    
    
}