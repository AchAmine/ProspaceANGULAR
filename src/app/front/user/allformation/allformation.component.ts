import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Formation } from 'src/app/model/Formation';
import { FormationService } from 'src/app/service/formation.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-allformation',
  templateUrl: './allformation.component.html',
  styleUrls: ['./allformation.component.css']
})
export class AllformationComponent implements OnInit {
  username:any;
  formation:Formation[];
  date: any;
  idu:any;
  selectValue:any;
  constructor(private userService:UserService,private router:Router,private dialogRef:MatDialog,private foramtionService:FormationService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.formation=[{
idFormation:null,
subject:null,
endsAt:null,
startsAt:null,
createdAt:null,


    }]
    this.getFormation();
    this.dialogRef.closeAll();
    this.username=null;
    //this.idu=null;
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
 
 
  getFormation(){
   
    this.foramtionService.getUndeletedAndCurrentFormation().subscribe((data)=>{
      this.formation=data;
    
      
})
  }
  convertDate(date: any){
    return this.date = this.datepipe.transform(date, 'yyyy-MM-dd');
  }
  participer(idf:any){
    this.getCurrentId();
    return this.foramtionService.paticiper(idf,this.idu).subscribe();
  }
  isnew(f:Formation){
    console.log("*****************"+f.subject+"*********************************");
    const now = new Date();
    const start = new Date(f.createdAt);
    console.log("createdAt----->"+start);
    console.log("now--------->"+now);
      const period =now.getTime()- start.getTime() ;
      let TotalDays = Math.ceil(period / (1000 * 3600 * 24));
      console.log("period-------->"+period);
      console.log("total days-------->"+TotalDays);
      if(TotalDays<=5){
    return true;}
    else{return false}
  }

}
