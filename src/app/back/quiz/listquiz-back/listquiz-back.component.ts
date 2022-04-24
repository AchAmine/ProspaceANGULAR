import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from 'src/app/model/Question';
import { Quiz } from 'src/app/model/Quiz';
import { QuestionService } from 'src/app/service/question.service';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-listquiz-back',
  templateUrl: './listquiz-back.component.html',
  styleUrls: ['./listquiz-back.component.css']
})
export class ListquizBackComponent implements OnInit {

  listQuiz?: any;
  quiz :  Quiz=new Quiz();
  form: boolean=false;
  listQuizQuestions? : any;


  quizz: Observable<Quiz[]>
  constructor(private questionService :QuestionService,private quizService :QuizService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllQuiz();;
  }
  getAllQuiz(){
    this.quizService.getAllQuiz().subscribe(res=> { this.listQuiz=res; console.log(res);})
  }
  addQuiz(quiz: any){
    this.quizService.addQuiz(quiz).subscribe(() => {
      this.getAllQuiz();
      this.form = false;
    });
  }
  deleteQuiz(idQuiz : any){
    this.quizService.deleteQuiz(idQuiz).subscribe(() => this.getAllQuiz())
  }
 

  editQuiz(quiz: any){
    this.router.navigate(['editquiz', quiz]);
  }

  quizDetails(id: number){
    this.router.navigate(['quizdetails', id]);
  }
  getQuizQuestions(quiz: any){
    this.router.navigate(['quizquestions', quiz]);
  }




}
