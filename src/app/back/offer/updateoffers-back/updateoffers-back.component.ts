import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/model/Offer';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-updateoffers-back',
  templateUrl: './updateoffers-back.component.html',
  styleUrls: ['./updateoffers-back.component.css']
})
export class UpdateoffersBackComponent implements OnInit {

  
  constructor(private route: ActivatedRoute,private  offerService: OfferService,private router: Router) { }
  id=0;
  offer?: any;
  ngOnInit(): void {
    this.id= this.route.snapshot.params.id;
    //alert(this.id);
    this.offerService.getOneOffer(this.id).subscribe(
      (data:any)=>{
        this.offer=data;
        this.offer.offerS
        console.log("OFFEEERS ",data);

        console.log(this.offer);
      });
  }

  editOffer(offer: Offer) {
    
  this.offerService.editOffer(offer).subscribe();
  
  this.router.navigate(['/listoffersBack']);
    
  }

  Cancel() {
    this.router.navigate(['/listoffersBack']);
  }

  }
  



