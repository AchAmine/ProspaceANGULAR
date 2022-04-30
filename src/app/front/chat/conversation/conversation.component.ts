import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  recipient = new User();
   //recipient:any;
  stompClient: any;
  date: any;
   msg:any = [];
   // --------------------------------------------- user
   currentUser = 2 ;
  
  constructor(private chatService : ChatService,public datepipe: DatePipe, public route: ActivatedRoute) { }

  ngOnInit(): void {
    const that = this;
    // initializing chat content 
    this.chatContent="";
    // static users
   this.sender.userName = "essia";
   this.sender.firstName= "essia";

  // this.recipient.userName="amine";
   
    // end static users
    // ---------------------------------------------
    // get sendTo
    this.route.paramMap.subscribe(res=>{this.recipient.userName=res.get('username') as string});
    this.recipient.firstName=this.recipient.userName;
    //
    // ---------------------------------------------
    // stompclient
   this.stompClient = this.chatService.stompClient;
   this.stompClient.connect({}, () => {console.log("connected");
    // recup tt les msg
   this.stompClient.subscribe(
   "/user/"+this.recipient.userName+"/queue/messages",(message:any) => {
    if (message.body) {
      that.msg.push(JSON.parse(message.body));
    }}); 
    // sub new msg
    this.stompClient.subscribe('/user/'+this.recipient.userName+'/queue/message', (message:any) => {
      if (message.body) {
        that.msg.push(JSON.parse(message.body));
      }});
      
      // ---------------------------------------------
      // load
   if (this.chatContent == "") {
    const chat = {
        senderId:    this.sender.userName,
        recipientId:    this.recipient.userName,
        senderName:  this.sender.firstName,
        recipientName:  this.recipient.firstName,
       };
    this.stompClient.send("/app/amine/msgs", {}, JSON.stringify(chat));
  } // end load


});
  console.log("FINAL MSGS LIST--------------------",this.msg);
  }
  // ---------------------------------------------
    

  // envoi msg 
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

}
