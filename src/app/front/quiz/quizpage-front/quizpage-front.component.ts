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

  quiz :  Quiz=new Quiz();
  form: boolean=false;
  listQuizQuestions? : any;
  quizz: Observable<Quiz[]>
  userExits:any; 
  exists=false;
  ResultQuiz:any;
  lisResults: any;
  // user static
  idUser = 1 ;
  constructor(private questionService :QuestionService,private quizService :QuizService,
    private resultQuizService :ResultQuizService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllQuiz();;
    console.log('REEESULT QUIIIZ 2111',this.getUserResultQuiz(1));
  }


  getAllQuiz(){
    this.quizService.getAllQuiz().subscribe(res=> { this.listQuiz=res; console.log(res);})
  }

  async getUserResultQuiz(idQuiz: any){
  // return  this.resultQuizService.userResult(idQuiz,this.idUser).subscribe(res=> { this.userExits=res; console.log('REEESULT QUIIIZ 2111',this.userExits);});
   //return this.resultQuizService.getAllResults().subscribe(res=> { this.lisResults=res; console.log("REEESUULTS",res);});
  this.resultQuizService.userResultExists(idQuiz,this.idUser).subscribe
(res=> {  return this.lisResults=res; console.log("REEESUULTS",res);



})
}
  

  
  save(idQuiz:number){
    if(this.lisResults==true){
    return  true;
   
    }else return false;
    }
 
   

  }
 
  
