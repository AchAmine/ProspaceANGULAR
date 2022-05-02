import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  idUser = 1 ;
  contactList :any;
  constructor(private chatService: ChatService , private route: ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.chatService.getContactList(this.idUser).subscribe(data=> this.contactList = data);
  }

  chatWith(user:any){
    // this.stompClient.disconnect();
      this.router.navigate(['chat', user]);
    }
}
