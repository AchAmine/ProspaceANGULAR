import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/model/Offer';
import { Rating } from 'src/app/model/Rating';
import { OfferService } from 'src/app/service/offer.service';
import { RatingService } from 'src/app/service/rating.service';

@Component({
  selector: 'app-offerdetails-front',
  templateUrl: './offerdetails-front.component.html',
  styleUrls: ['./offerdetails-front.component.css']
})
export class OfferdetailsFrontComponent implements OnInit {
  id: number;
  offer: any;
  currentRate : any;
  form: boolean=false;
  Rating :  Rating=new Rating();
  listRatings:any;
  idUser = 1 ; 
  




  constructor(private offerService : OfferService , public router : Router , public route : ActivatedRoute,
   private ratingService:RatingService) { }
  ngOnInit(): void {
  
    this.id = this.route.snapshot.params['id'];
    
    this.offerService.getOneOffer(this.id)
      .subscribe(data => { this.offer = data; });;
     this.ratingService.getUserRating(this.id,this.idUser).subscribe(data => 
      {
      this.currentRate = data.rate;
      console.log("this current rate  -- ", this.currentRate);}
      )
     
    
    }

    /* addRating(rating: any){

      console.log("-------------RATING--------------",rating);
      this.Rating.rate = rating;

      this.ratingService.addRating(this.Rating,this.idUser,this.id).subscribe(() => {
      
        this.router.navigate([`offerDetailsFront/${this.route.snapshot.params.id}`]);
        // this.getAllQuiz();
         this.form = false;
      
       });
    } */

    addRating(rating: any){

      console.log("-------------RATING--------------",rating);
      //this.Rating.rate = rating;

      this.ratingService.getUserRating(this.id,this.idUser).subscribe(data => 
        {
        this.Rating = data;
        console.log("rating  -- ", this.Rating);
          if (this.Rating != null){
            this.Rating.rate = rating;
            this.ratingService.editRating(this.Rating).subscribe(()=> console.log("updated rating",this.Rating));
          }
          else {
          let newRating = new Rating();
          newRating.rate = rating;
            this.ratingService.addRating(newRating,this.idUser,this.id).subscribe(() => 
            console.log("new rating",this.Rating));
          }
          
          this.router.navigate([`offerDetailsFront/${this.route.snapshot.params.id}`]);
          })

      
    }

    
    

  
}
