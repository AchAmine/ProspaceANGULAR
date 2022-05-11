import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { complaints } from 'src/app/model/complaint';
import { ComplaintService } from "src/app/service/complaint.service";

@Component({
  selector: 'app-listcomplaint-back',
  templateUrl: './listcomplaint-back.component.html',
  styleUrls: ['./listcomplaint-back.component.css']
})
export class ListcomplaintBackComponent implements OnInit {
  [x: string]: any;

  listcomplaint?: any;
  article :  complaints =new complaints();
  form: boolean=false;
  date: any;

  complaint: Observable<complaints[]>
  constructor(private articleService :ComplaintService, private router: Router,public datepipe: DatePipe) { }
 
  ngOnInit(): void {
    this.getAllcomplaint();;
  }
  getAllcomplaint(){
    this.articleService.getAllcomplaint().subscribe(res=> { this.listcomplaint=res; console.log(res);})
  }

  addComplaint(complaint: any){
    this.complaintService.addComplaint(complaint).subscribe(() => {
      this.getAllcomplaint();
      this.form = false;
    });
  }

  deleteComplaint(idComplaint : any){
    if (window.confirm('Are sure you want to delete this complaint ?')) {
    this.complaintService.deleteComplaint(idComplaint).subscribe(() => {this.getAllcomplaint();
    console.log("DELETE ID:",idComplaint);}
    )
    }
  }

  editComplaint(complaints: any){
      this.router.navigate(['dashboard/editcomplaint', this.complaint]);
    
  }
  convertDate(date: any){
    return this.date = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm');
   }


}
