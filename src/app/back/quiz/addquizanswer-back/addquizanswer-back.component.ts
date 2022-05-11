import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/app/model/Answer';
import { Question } from 'src/app/model/Question';
import { AnswerService } from 'src/app/service/answer.service';

@Component({
  selector: 'app-addquizanswer-back',
  templateUrl: './addquizanswer-back.component.html',
  styleUrls: ['./addquizanswer-back.component.css']
})
export class AddquizanswerBackComponent implements OnInit {
  listQuestions?: any;
  answer: Answer = new Answer();
  form: boolean=false;
  id?: any;
  question :  Question=new Question();
  constructor(private answerService: AnswerService,private router: Router, public fb: FormBuilder,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addQuizQuestionAnswer(answer: any) {
    this.answerService.AddQuizQuestionAnswer(answer,this.route.snapshot.params.id).subscribe(() => {
      // this.getAllQuiz();
      this.router.navigate([`quizquestionAnswers/${this.route.snapshot.params.id}`]);
       this.form = false;
     });
  }

  Cancel() {
    this.router.navigate([`quizquestionAnswers/${this.route.snapshot.params.id}`]);
  }

}
