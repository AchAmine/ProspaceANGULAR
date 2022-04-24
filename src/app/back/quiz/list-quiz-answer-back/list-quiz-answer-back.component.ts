import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Answer } from 'src/app/model/Answer';
import { Question } from 'src/app/model/Question';
import { Quiz } from 'src/app/model/Quiz';
import { AnswerService } from 'src/app/service/answer.service';

@Component({
  selector: 'app-list-quiz-answer-back',
  templateUrl: './list-quiz-answer-back.component.html',
  styleUrls: ['./list-quiz-answer-back.component.css']
})
export class ListQuizAnswerBackComponent implements OnInit {

  listQuiz?: any;
  listQuestions?: any;

  quiz :  Quiz=new Quiz();
  Question: Question=new Question();
  Answer: Answer=new Answer();
  form: boolean=false;
  id: number;
  listAnswers?: any
  Answers: Observable<Answer[]>
  constructor(private answerService :AnswerService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
   this.getAllQuizQuestionAnswers();
  }


  getAllQuizQuestionAnswers(){
    this.answerService.getQuizQuestionAnswers(this.id).subscribe(data => {
      this.listAnswers = data;})
  }

  deleteQuizQuestionAnswer(idAnswer : any){
    this.answerService.DeleteQuestionAnswer(idAnswer).subscribe(() => this.getAllQuizQuestionAnswers())
  }
}
