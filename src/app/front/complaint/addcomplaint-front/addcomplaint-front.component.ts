import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ComplaintService} from "src/app/service/complaint.service";
import {complaints} from "src/app/model/complaint";

@Component({
  selector: 'app-addcomplaint-front',
  templateUrl: './addcomplaint-front.component.html',
  styleUrls: ['./addcomplaint-front.component.css']
})
export class AddcomplaintFrontComponent implements OnInit {

  complaint = new complaints();
  message: string;
 
  constructor(private complaintService: ComplaintService,    private router: Router) {
}
  ngOnInit(): void {
  }

  addComplaint() {
    this.complaintService.addComplaint(this.complaint).subscribe(res => {
      console.log(res);

    });
    this.router.navigate(['complaint']).then(() => {
      window.location.reload();
    });
}
}
