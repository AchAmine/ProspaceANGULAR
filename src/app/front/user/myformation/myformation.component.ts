import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/model/Formation';
import { FormationService } from 'src/app/service/formation.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-myformation',
  templateUrl: './myformation.component.html',
  styleUrls: ['./myformation.component.css']
})
export class MyformationComponent implements OnInit {
  formation:Formation[];
  idu:any;
  username:any;
  date: any;
  
  constructor(private userService:UserService,public datepipe: DatePipe,private formationService:FormationService) { }

  ngOnInit(): void {
    this.formation=[{
      idFormation:null,
      subject:null,
      endsAt:null,
      startsAt:null,
      createdAt:null,
      
      
          }]
          this.username=null;
          this.getCurrentId()
          console.log(this.idu);
          this.getCurrentUserName();
  }
  getCurrentId(){
    this.userService.getCurrentUserId().subscribe(data=>{
      this.idu=data;
      console.log("===="+this.idu);
    })
  }
  getCurrentUserName(){
    this.userService.getCurrentUserName().subscribe((data)=>{
    this.username=data;
    })
  }
  convertDate(date: any){
    return this.date = this.datepipe.transform(date, 'yyyy-MM-dd');
  }
  getCurrentFormation(){
    return this.formationService.getCurrentUserFormation().subscribe((data)=>{
      this.formation=data;
    })
  }

}
