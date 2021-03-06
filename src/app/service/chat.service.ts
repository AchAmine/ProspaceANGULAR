import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
declare var SockJS:any;
declare var Stomp:any;

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private baseUrl = 'http://localhost:8089/SpringMVC/followers'
  stompClient:any;
  
  constructor( private http: HttpClient) { this.initializeWebSocketConnection() }
    
  public msg = [];    

  initializeWebSocketConnection() {
    SockJS = new SockJS("http://localhost:8089/SpringMVC/ws");
    this.stompClient = Stomp.over(SockJS);
    console.log("Service chat");
  }

   sendMessage(input: any,msg:any) {   
    console.log('connected to WS');
        if (!msg) {
            return;
        }
      this.stompClient.send("/app/chat", {}, JSON.stringify(msg));     
    }

    getMessages(sender:any , recipient:any) {
      return this.http.get(`http://localhost:8089/SpringMVC/messages/${sender}/${recipient}`);
    }

    countNewMsgs(sender:any , recipient:any){
      return this.http.get(`http://localhost:8089/SpringMVC/messages/${sender}/${recipient}/count`);
    }

    updateStatus() {
      
    }

    getContactList(idUser: any) {
      return this.http.get(`${this.baseUrl}/listfollowers/${idUser}`);
    }

    getChatId(username: any,recipientId: any) {
      return this.http.get(`http://localhost:8089/SpringMVC/chatId/${username}/${recipientId}`, { responseType: 'text' });
    }
     
    
}
