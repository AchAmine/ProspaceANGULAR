import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileComponent } from 'src/app/front/user/profile/profile.component';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-front-navbar',
  templateUrl: './front-navbar.component.html',
  styleUrls: ['./front-navbar.component.css']
})
export class FrontNavbarComponent implements OnInit {

  username:any;
  user:any;
  admin:any;
  isAdmin:any;

  constructor(private dialog:MatDialog,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
   // this.dialogRef.closeAll();
    this.username=null;
   this.getCurrentUserName();
this.getRole();
this.isAdmin=false;
    
    
  }
  getCurrentUserName(){
    this.userService.getCurrentUserName().subscribe((data)=>{
    this.username=data;
    })
  }
  logout(){
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }
  openProfileDialog(){
   const dialogRef =this.dialog.open(ProfileComponent);
  }
 getRole(){
   this.userService.getrole().subscribe(data=>{
     this.admin=data;
     console.log(data.toString())
   })
 }
isAdminMethod(){
if(this.admin==="Admin"){
  this.isAdmin=true;
}


}
}
