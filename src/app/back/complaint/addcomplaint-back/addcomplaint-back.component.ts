import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { complaints } from 'src/app/model/complaint';
import { ComplaintService } from 'src/app/service/complaint.service';

@Component({
  selector: 'app-addcompalint-back',
  templateUrl: './addcomplaint-back.component.html',
  styleUrls: ['./addcomplaint-back.component.css']
})
export class AddcomplaintBackComponent implements OnInit {

  
  complaint: complaints = new complaints();
  listcomplaints?: any;
  form: FormGroup;  
  types : any = [];
  type: any;

  constructor(private complaintService: ComplaintService,private router: Router, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      article: [''],
      file: [null],
    });
    this.types = ['Technical','Other'];

  }

  getAllcomplaint(){
    this.complaintService.getAllcomplaint().subscribe(res=> { this.listcomplaints=res; console.log(res);})
  }


  Cancel() {
    this.router.navigate(['/dashboard/listcomplaint']);
  }
}
