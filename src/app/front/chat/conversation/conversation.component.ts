import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  inputMsg ="";
  chatContent="";
  sender = new User(); //sender:any;
  recipient = new User(); //recipient:any;
  stompClient: any;
  date: any;
   msg:any = [];
   subscription : any;

   // entrer
   idUser = 1 ; 
   contactList :any;
   public isEmojiPickerVisible: boolean;
  
  constructor(private chatService : ChatService,public datepipe: DatePipe,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
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
   this.sender.userName = "amine";
   console.log("--------------5---------------",this.sender.userName);


   //this.recipient.userName="amine";
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
      console.log("sender : ",this.sender.userName);

      this.loadChat();

    this.subscription =  this.stompClient.subscribe('/user/'+this.recipient.userName+'/queue/message', (message:any) => {
      if (message.body) {
        this.msg.push(JSON.parse(message.body));
      }});
      }
        //-------------------------------------------------------
    loadChat(){
      this.chatService.getMessages(this.sender.userName,this.recipient.userName).subscribe(data=> this.msg = data);
    }
    //-------------------------------------------------------


    sendMessage() {     
      console.log('connected to WS');
         
          if (!this.inputMsg) {
              return;
          }
         
          const msg = {
            senderId: this.sender.userName,
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
       return this.chatService.countNewMsgs(this.sender.userName,recipient).subscribe();
     }

     
     onKeyUp(event:any) { 
      this.sendMessage();
    }

    getContacts() {
      this.chatService.getContactList(this.idUser).subscribe(data=> this.contactList = data);
    }

    chatWith(user:any){
    // this.stompClient.disconnect();
      this.msg.splice(0);
      console.log("new msg list",this.msg);
      this.subscription.unsubscribe();
      this.connect();
      this.router.navigate(['home/conversation', user]);
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
