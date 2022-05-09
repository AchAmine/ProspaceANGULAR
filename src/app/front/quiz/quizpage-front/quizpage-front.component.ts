import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/model/Quiz';
import { ResultQuiz } from 'src/app/model/ResultQuiz';
import { QuestionService } from 'src/app/service/question.service';
import { QuizService } from 'src/app/service/quiz.service';
import { ResultQuizService } from 'src/app/service/result-quiz.service';

@Component({
  selector: 'app-quizpage-front',
  templateUrl: './quizpage-front.component.html',
  styleUrls: ['./quizpage-front.component.css']
})
export class QuizpageFrontComponent implements OnInit {
  listQuiz?: any;
  listTop3ResultQuiz?: any;

  quiz :  Quiz=new Quiz();
  form: boolean=false;
  listQuizQuestions? : any;
  quizz: Observable<Quiz[]>

  ResultQuiz:any;
  // user static
  idUser = 1 ;
  constructor(private questionService :QuestionService,private quizService :QuizService,
    private resultQuizService :ResultQuizService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllQuiz();;
    console.log('REEESULT QUIIIZ 2',this.getResultQuiz(2));

  }


  getAllQuiz(){
    this.quizService.getAllQuiz().subscribe(res=> { this.listQuiz=res; console.log(res);})
  }

  getResultQuiz(idQuiz:any){
    this.resultQuizService.getUserResult(idQuiz,this.idUser).subscribe();
  }

  public Top3QuizResults(idQuiz:number){

    this.resultQuizService.Top3QuizResults(idQuiz).subscribe(res=> { this.listTop3ResultQuiz=res; console.log(res);})
}
}