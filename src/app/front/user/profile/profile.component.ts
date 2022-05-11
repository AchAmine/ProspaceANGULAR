import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experiences } from 'src/app/model/experiences';
import { profile } from 'src/app/model/profile';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  uProfile:profile = new profile();
 username:any=this.getusername();
 id:any;
 editableSkill:any=false;
 editableExp:any=false;
 ski:any;
 exp:experiences;
 user:profile;
user2:any;
  ide:any;
  ids:any;
  constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
  this.user={
    idUser:null, 
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
  }
 
  this.exp = {
     idExperience:null,
     title:null,
     duration:null,
  }
  this.ski = {
    
    type:null,
   
  }
  
  this.user2={
    idUser:null, 
    firstName:null,
        lastName:null,
        
        email: null,
        
        age: null,}
  
 
    this.getusername();
     
    this.getCurrentId();
   
    this.getTheConnectedUser();
    this.getTheConnectedUser();
    
  
   
    
   
  
   
    
  }
editSkill(){
  this.editableSkill=true;
}
editExp(){
  this.editableExp=true;
}
endEditSkill(){
  this.editableSkill=false;
}
  getCurrentId(){
    this.userService.getCurrentUserId().subscribe(data=>{
      this.id=data;
      console.log("===="+this.id);
    })
  }
  getTheConnectedUser(){
   this.userService.getConnectedUser().subscribe((res:any)=>{
     this.user=res;
     
   })
      
    
  }
  displayUsername(){
    console.log("display Username--<"+this.username);
  }
  getusername(){
    this.userService.getCurrentUserName().subscribe(data=>
      {
        
        this.username=data;
        console.log("in subscribe data-->"+data+"  username--->"+this.username);
        return data;
      })
  }
 deleteUser(idu:any){
  this.userService.logout();
  this.router.navigateByUrl('/home');
   this.userService.deleteUser(idu).subscribe();
  
 }
  addNewExp(id:any,e:experiences){
    this.userService.saveExp(e).subscribe(data=>{
      this.userService.affecterExpToSkill(id,data).subscribe(()=>{this.getTheConnectedUser()});
    })
    this.editableExp=false;
  }
 
  addNewSkill(id:any,s:any){
    console.log(s)
  this.userService.saveSkill(s).subscribe(data=>{
    this.userService.affecterSkillToUser(data,id).subscribe(()=>this.getTheConnectedUser());
  }) 
  
  this.editableSkill=false;
  //console.log("id experience----->"+this.ide);
  
    
  }
  updateUser(firstname:any,lastname:any,email:any,age:any){
   
  // u.idUser=this.getCurrentId(); 
   this.user.firstName=firstname;
   this.user.lastName=lastname;
      // userName: any
      this.user.email = email;
      this.user.age=age;
      console.log("update----------->"+this.user)
   // u.idUser=this.getCurrentId();
    this.userService.updateUser(this.user).subscribe(()=>this.getTheConnectedUser()); 
  }
}
