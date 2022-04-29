import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Offer } from 'src/app/model/Offer';
import { OfferService } from 'src/app/service/offer.service';

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



  offers: Observable<Offer[]>
  constructor(private offerService :OfferService, private router: Router,private route: ActivatedRoute) { }

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

}
