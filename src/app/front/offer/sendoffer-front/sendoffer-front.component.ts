import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Offer } from 'src/app/model/Offer';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-sendoffer-front',
  templateUrl: './sendoffer-front.component.html',
  styleUrls: ['./sendoffer-front.component.css']
})
export class SendofferFrontComponent implements OnInit {

  offer: Offer = new Offer();
  listOffers?: any;
  form: FormGroup;
  constructor(private offerService: OfferService,private router: Router, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      offer: [''],
      file: [null],
    });
  }

  uploadFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('file')?.setValue(file);
    }
  }

  sendOffer(offer: any) {
    console.log(offer);
    const formData = new FormData();
    formData.append('file', this.form.get('file')?.value);
    formData.append('offer', JSON.stringify(offer));
    this.offerService.addOffer(formData).subscribe(
      () => {
        this.getAllOffers();
      }
    );
  }

  getAllOffers(){
    this.offerService.getAllOffers().subscribe(res=> { this.listOffers=res; console.log(res);})
    this.router.navigate(['/listoffersFront']);
   
  }

  Cancel() {
    this.router.navigate(['/listoffersFront']);
  
}}
