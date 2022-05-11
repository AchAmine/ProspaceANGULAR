import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Formation } from 'src/app/model/Formation';
import { FormationService } from 'src/app/service/formation.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {
formation:Formation;
  constructor(private userService:UserService,private router:Router,private dialogRef:MatDialog,private foramtionService:FormationService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.formation={
      idFormation:null,
      subject:null,
      endsAt:null,
      startsAt:null,
      createdAt:null,
      
      
          }
  }
  addFormation(f:any){
    console.log("addF--->"+f.subject)
    this.userService.getCurrentUserId().subscribe(data=>{
      console.log("idu--->"+data)
      this.foramtionService.addFormation(f,data).subscribe();
    })
    this.router.navigateByUrl('/dashboard/formations'); 
    
  }

}
