import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { profile } from 'src/app/model/profile';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css']
})
export class UserManagmentComponent implements OnInit {
  users:profile[];
  users2:profile[];
  date: any;
  titres:any;
  constructor(private userService:UserService,public datepipe: DatePipe) { }

  ngOnInit(): void {
this.users=[{idUser:null, 
  firstName:null,
      lastName:null,
      userName: null,
      email: null,
      password: null,
      age: null,
      createdAt:null,
      modifiedAt:null,
      deletedAt:null,
      skills:[{
        idSkill:null,
        type:null,
        experiences:[{
          idExperience:null,
          title:null,
          duration:null,
        }]
       
      }]
}]
this.users2=[{idUser:null, 
  firstName:null,
      lastName:null,
      userName: null,
      email: null,
      password: null,
      age: null,
      createdAt:null,
      modifiedAt:null,
      deletedAt:null,
      skills:[{
        idSkill:null,
        type:null,
        experiences:[{
          idExperience:null,
          title:null,
          duration:null,
        }]
       
      }]
}]
this.getUndeletedUsers();
this.getDeletedUsers();
this.getUsersParTitre();

  }
  getUndeletedUsers(){
    this.userService.getUndeletedUsers().subscribe((data)=>{
      this.users=data;
    })
  }
  convertDate(date: any){
    return this.date = this.datepipe.transform(date, 'yyyy-MM-dd');
  }
  addRole(idu:any,rname:any){
    this.userService.addRole(idu,rname).subscribe();
  }
  getDeletedUsers(){
    this.userService.getDeletedUsers().subscribe(data=>{
      this.users2=data;
    })
  }
  getUsersParTitre(){
    this.userService.getUsersParTitre().subscribe(data=>{
      this.titres=data;
    })
  }

}
