import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Offer } from 'src/app/model/Offer';
import { Rating } from 'src/app/model/Rating';
import { OfferService } from 'src/app/service/offer.service';
import { RatingService } from 'src/app/service/rating.service';

@Component({
  selector: 'app-listoffers-front',
  templateUrl: './listoffers-front.component.html',
  styleUrls: ['./listoffers-front.component.css']
})
export class ListoffersFrontComponent implements OnInit {

  listOffers?: any;
  offer :  Offer=new Offer();
  form: boolean=false;
  listQuizQuestions? : any;
  path:any;
  image:any;

currentRate : number=0;
Ratings: Rating[] = [];
Rating :  Rating=new Rating();

  offers: Observable<Offer[]>
  constructor(private offerService :OfferService, private router: Router,private route: ActivatedRoute,
    private ratingService: RatingService) { }

  ngOnInit(): void {
    this.getAllOffers();
  }
  
  getAllOffers(){
    this.offerService.getAllOffers().subscribe(res=> { this.listOffers=res; console.log(res);})
  }

  getImage(path:any){
    return this.offerService.getImage(path).subscribe(
       data => {
        this.image = data;

         console.log("Image : ",this.image);
       }
       
     );
   }

   offerDetails(id: number){
    this.router.navigate(['offerDetailsFront', id]);
  }


  

  

}
