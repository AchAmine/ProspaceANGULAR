import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  form: FormGroup;
  constructor(private offerService: OfferService,private router: Router, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      file: [null],
    });
  }

  uploadFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('file')?.setValue(file);
    }
  }

  sendFile() {
    const formData = new FormData();
    formData.append('file', this.form.get('file')?.value);
    this.offerService.uploadFile(formData).subscribe(()=> this.router.navigate(['/listoffersFront']));

  }


  Cancel(){
    this.router.navigate(['/listoffersFront']);
  }

}
