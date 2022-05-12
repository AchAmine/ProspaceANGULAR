import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/model/Offer';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-offerdetails-back',
  templateUrl: './offerdetails-back.component.html',
  styleUrls: ['./offerdetails-back.component.css']
})
export class OfferdetailsBackComponent implements OnInit {
  id:any;
  offer?: any;
  constructor(private offerService : OfferService , public router : Router , public route : ActivatedRoute) { }

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

  acceptOffer() {

    this.offerService.getOneOffer(this.id).subscribe(data => {
      this.offer = data as Offer;
      this.offer.state = 'Accepted';
      console.log("----EDITING ---");
      this.offerService.editOffer(this.offer).subscribe();
      console.log("REFRESHING ----");
      this.ngOnInit();
      
    });
}

rejectOffer() {
  this.offerService.getOneOffer(this.id).subscribe(data => {
    this.offer = data as Offer;
    this.offer.state = 'Rejected';
    console.log("----EDITING ---");
    console.log("Offer : ",this.offer);
    this.offerService.editOffer(this.offer).subscribe();
    console.log("REFRESHING ----");
    this.ngOnInit();
  });
}
  Cancel(){
    this.router.navigate(['/dashboard/listoffersBack']);
  }


}
