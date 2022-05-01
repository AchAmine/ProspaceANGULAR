import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/model/Quiz';
import { ResultQuiz } from 'src/app/model/ResultQuiz';
import { ResultQuizService } from 'src/app/service/result-quiz.service';

@Component({
  selector: 'app-result-quiz-front',
  templateUrl: './result-quiz-front.component.html',
  styleUrls: ['./result-quiz-front.component.css']
})
export class ResultQuizFrontComponent implements OnInit {

  ResultQuizList?: any;
  ResultQuiz :  ResultQuiz=new ResultQuiz();
  form: boolean=false;



  quizz: Observable<ResultQuiz[]>
  constructor(private resultQuizService :ResultQuizService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllQuiz();;
  }
  getAllQuiz(){
    this.resultQuizService.getResultQuiz(this.route.snapshot.params.id).subscribe(res=> { 
      this.ResultQuiz=res; console.log(res);})
  }
}
