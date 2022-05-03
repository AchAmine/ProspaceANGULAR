import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/model/Question';
import { Quiz } from 'src/app/model/Quiz';
import { QuestionService } from 'src/app/service/question.service';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-update-quiz-question-back',
  templateUrl: './update-quiz-question-back.component.html',
  styleUrls: ['./update-quiz-question-back.component.css']
})
export class UpdateQuizQuestionBackComponent implements OnInit {
  constructor(private route: ActivatedRoute,private  questionService: QuestionService,private router: Router) { }
  id=0;
  question?: any;
  ngOnInit(): void {
    this.id= this.route.snapshot.params.id;
    //alert(this.id);
    this.questionService.getQuestion(this.id).subscribe(
      (data:any)=>{
        this.question=data;
        console.log("QUEESTION ",data);

        console.log(this.question);
      });
  }

  public updateQuizQuestion(Question: any, idQuiz: any){
    this.questionService.editQuizQuestion(Question,idQuiz).subscribe(
    );


  }



 

}
