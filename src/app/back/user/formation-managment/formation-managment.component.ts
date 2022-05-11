import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Formation } from 'src/app/model/Formation';
import { FormationService } from 'src/app/service/formation.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-formation-managment',
  templateUrl: './formation-managment.component.html',
  styleUrls: ['./formation-managment.component.css']
})
export class FormationManagmentComponent implements OnInit {
  formation:Formation[];
  date:any
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
  }
  getFormation(){
   
    this.foramtionService.getFormation().subscribe((data)=>{
      this.formation=data;
    
      
})
  }
  convertDate(date: any){
    return this.date = this.datepipe.transform(date, 'yyyy-MM-dd');
  }
  deleteFormation(idf:any){
    this.foramtionService.deleteFormation(idf).subscribe(()=>{
      this.getFormation();
    });
  }

}
