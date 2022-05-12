import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Offer } from 'src/app/model/Offer';
import { OfferService } from 'src/app/service/offer.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sendoffer-front',
  templateUrl: './sendoffer-front.component.html',
  styleUrls: ['./sendoffer-front.component.css']
})
export class SendofferFrontComponent implements OnInit {

  offer: Offer = new Offer();
  listOffers?: any;
  form: FormGroup;
  user:any;
  constructor(private offerService: OfferService,private router: Router, public fb: FormBuilder,private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getConnectedUser().subscribe(data => this.user = data)
       this.form = this.fb.group({
      offer: [''],
      file: [null],
    });
    
    this.form= this.fb.group({
      offer: [''],
      type:['', [Validators.required, Validators.minLength(5)]],
      title:['', [Validators.required, Validators.minLength(5)]],
      endsAt:['', [Validators.required]],
      startsAt:['', [Validators.required]],
      description:['', [Validators.required, Validators.minLength(20)]],
      file:['', [Validators.required]],

sendCatalog: false
    })
   
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
    this.offerService.addOffer(formData,this.user.idUser).subscribe(
      () => {
        this.getAllOffers();
      }
    );
  }

  getAllOffers(){
    this.offerService.getAllOffers().subscribe(res=> { this.listOffers=res; console.log(res);})
    this.router.navigate(['/home/listoffersFront']);
   
  }

  Cancel() {
    this.router.navigate(['/home/listoffersFront']);
  
}}
