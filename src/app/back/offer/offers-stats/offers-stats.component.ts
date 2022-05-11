import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResultQuiz } from 'src/app/model/ResultQuiz';
import { OfferService } from 'src/app/service/offer.service';
import { ResultQuizService } from 'src/app/service/result-quiz.service';

@Component({
  selector: 'app-offers-stats',
  templateUrl: './offers-stats.component.html',
  styleUrls: ['./offers-stats.component.css']
})
export class OffersStatsComponent implements OnInit {

  constructor(private resultQuizService:ResultQuizService, private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
   
  }
  

}
