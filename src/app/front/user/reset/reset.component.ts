import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
token:any;
  constructor(private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.token = params['token'])
  }
resetPasswor(newpassword:any){
  console.log('the token is--->'+this.token)
  this.userService.resetPassword(newpassword,this.token).subscribe();
}
}
