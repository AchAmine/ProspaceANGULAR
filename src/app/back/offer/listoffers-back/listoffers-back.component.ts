import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Offer } from 'src/app/model/Offer';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-listoffers-back',
  templateUrl: './listoffers-back.component.html',
  styleUrls: ['./listoffers-back.component.css']
})
export class ListoffersBackComponent implements OnInit {

 
  listOffers?: any;
  offer :  Offer=new Offer();
  form: boolean=false;
  listQuizQuestions? : any;


  offers: Observable<Offer[]>
  constructor(private offerService :OfferService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllOffers();
    console.log("REFRESHING 2 -----");
  }
  
  getAllOffers(){
    this.offerService.getAllOffers().subscribe(res=> { this.listOffers=res; console.log(res);})
  }
  add(offer: any){
    this.offerService.addOffer(offer).subscribe(() => {
      this.getAllOffers();
      this.form = false;
    });
  }
  deleteOffer(idOffer : any){
    this.offerService.deleteOffer(idOffer).subscribe(() => {
      this.getAllOffers()
      this.ngOnInit();
    })
  }
  acceptOffer(idOffer: any) {

      this.offerService.getOneOffer(idOffer).subscribe(data => {
        this.offer = data as Offer;
        this.offer.state = 'Accepted';
        console.log("----EDITING ---");
        this.offerService.editOffer(this.offer).subscribe();
        console.log("REFRESHING ----");
        this.ngOnInit();
      });
  }

  rejectOffer(idOffer:any) {
    this.offerService.getOneOffer(idOffer).subscribe(data => {
      this.offer = data as Offer;
      this.offer.state = 'Rejected';
      console.log("----EDITING ---");
      console.log("Offer : ",this.offer);
      this.offerService.editOffer(this.offer).subscribe();
      console.log("REFRESHING ----");
      this.ngOnInit();
    });
  }

  offerDetails(idOffer: any)
{
  this.offerService.getOneOffer(idOffer).subscribe();
}
 

 
 
}
