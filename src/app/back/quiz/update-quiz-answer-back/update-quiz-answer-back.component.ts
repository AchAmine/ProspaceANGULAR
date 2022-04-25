import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AnswerService } from 'src/app/service/answer.service';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-update-quiz-answer-back',
  templateUrl: './update-quiz-answer-back.component.html',
  styleUrls: ['./update-quiz-answer-back.component.css']
})
export class UpdateQuizAnswerBackComponent implements OnInit {

  constructor(private route: ActivatedRoute,private  answerService: AnswerService,private router: Router) { }
  id=0;
  answer?: any;
  ngOnInit(): void {
    this.id= this.route.snapshot.params.id;
    //alert(this.id);
    this.answerService.getAnswer(this.id).subscribe(
      (data:any)=>{
        this.answer=data;
        console.log("ANSWEER ",data);

        console.log(this.answer);
      });
  }

  public updateAnswer(){
    this.answerService.editAnswer(this.answer).subscribe(
    );


  }


}
