import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/model/Offer';
import { OfferComment } from 'src/app/model/OfferComment';
import { Rating } from 'src/app/model/Rating';
import { OfferCommentService } from 'src/app/service/offer-comment.service';
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
  currentRate = 0;
  form: boolean=false;
  Rating :  Rating=new Rating();
  listRatings:any;
  idUser = 1 ; 
  offercomments:any;
  Offercomment: OfferComment= new OfferComment;
  comment_value: any;
  commentToEdit:OfferComment= new OfferComment;
  hide=false;





  constructor(private offerService : OfferService , public router : Router , public route : ActivatedRoute,
   private ratingService:RatingService,private offerCommentService:OfferCommentService) { }
  ngOnInit(): void {
  
    this.id = this.route.snapshot.params['id'];
    
    this.offerService.getOneOffer(this.id)
      .subscribe(data => { this.offer = data; });;
     this.ratingService.getUserRating(this.id,this.idUser).subscribe(data => 
      {
        if (data != null) {
      this.currentRate = data.rate; 
      console.log("this current rate  -- ", this.currentRate);
        }
      }
      )
    
    this.offerService.getOneOffer(this.id)
      .subscribe(data => { this.offer = data; });

    this.getOfferComments(this.id);
     
    
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

    
    getOfferComments(idOfferComment: number){
      this.offerCommentService.getAllOfferComments(idOfferComment).subscribe(data => { this.offercomments = data; 
      console.log(this.offercomments)});
    }
  
    addOfferComment( ){
     
      this.Offercomment.content = this.comment_value.toString();
      
      this.offerCommentService.addComment(this.Offercomment,this.route.snapshot.params.id,this.idUser).subscribe(
        () => {
          this.getOfferComments(this.id) ; 
          this.comment_value='';
        }
  
      );
    
    }
    deleteOfferComment(idOfferComment : any){
      this.offerCommentService.deleteOfferComment(idOfferComment).subscribe(() => this.getOfferComments(this.route.snapshot.params.id))
    }

    openEditOfferCommentForm(OfferComment:OfferComment) {
      this.commentToEdit = OfferComment;
    }
  
    editOfferComment(){
      this.offerCommentService.editOfferComment(this.commentToEdit).subscribe(
       data => {
          this.commentToEdit = new OfferComment();
          this.hide = true;
        }
      );
    }

    Cancel() {
      this.getOfferComments(this.id) ; ;
    }
}
