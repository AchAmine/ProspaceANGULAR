import { DatePipe } from '@angular/common';
import { Component, OnInit, SimpleChange } from '@angular/core';
import { MessageStatus } from 'src/app/enum/MessageStatus.enum';
import { Chat } from 'src/app/model/Chat';
import { User } from 'src/app/model/User';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  inputMsg ="";
  chatContent="";
  sender = new User(); //sender:any;
  recipient = new User(); //recipient:any;
  stompClient: any;
  date: any;
   msg:any = [];

   // entrer
   inputs = [1];

   public isEmojiPickerVisible: boolean;
  
  constructor(private chatService : ChatService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    const that = this;
    this.chatContent="";
    this.stompClient = this.chatService.stompClient;
   this.sender.userName = "essia";
   this.sender.firstName= "essia";


   this.recipient.userName="amine";
   this.recipient.firstName="amine";
   this.stompClient.connect({}, () => {console.log("connected");

    this.chatService.getMessages(this.sender.userName,this.recipient.userName).subscribe(data=> this.msg = data);

    this.stompClient.subscribe('/user/'+this.recipient.userName+'/queue/message', (message:any) => {
      if (message.body) {
        that.msg.push(JSON.parse(message.body));
      }});

   if (this.chatContent == "") {
    const chat = {
        senderId:    this.sender.userName,
        recipientId:    this.recipient.userName,
        senderName:  this.sender.firstName,
        recipientName:  this.recipient.firstName,
       };
    this.stompClient.send("/app/amine/msgs", {}, JSON.stringify(chat));
  }
  
});
  console.log("FINAL MSGS LIST--------------------",this.msg);
  }
     //
       onMessageReceived(payload: any) {
        var msg = JSON.parse(payload.body);
        var date = new Date(msg.timestamp);
         
    }


     sendMessage() {     
      console.log('connected to WS');
         
          if (!this.inputMsg) {
              return;
          }
         
          const msg = {
            senderId: this.sender.userName,
            recipientId: this.recipient.userName,
            senderName:  this.sender.firstName,
            recipientName:  this.recipient.firstName,
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

     /* ngOnChanges(changes:SimpleChange){
      console.log(changes);
    } */

     /* ngOnDestroy(){
      if (this.stompClient !== null) {
       this.stompClient.disconnect();
      }
     } */

    

     onKeyUp(event:any) { 
      this.sendMessage();
    }
    
}
