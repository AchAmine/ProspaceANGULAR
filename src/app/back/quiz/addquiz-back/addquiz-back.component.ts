import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/model/Quiz';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-addquiz-back',
  templateUrl: './addquiz-back.component.html',
  styleUrls: ['./addquiz-back.component.css']
})
export class AddquizBackComponent implements OnInit {
  listQuiz?: any;
  quiz: Quiz = new Quiz();
  form: boolean=false;
  constructor(private quizService: QuizService,private router: Router, public fb: FormBuilder) { }

  ngOnInit(): void {
   
  }

  getAllQuiz(){
    this.quizService.getAllQuiz().subscribe(res=>this.listQuiz=res)
  }
addQuiz(quiz: any) {
  this.quizService.addQuiz(quiz).subscribe(() => {
   // this.getAllQuiz();
   this.router.navigate(['/listquiz']);
    this.form = false;
  });
}

Cancel() {
  this.router.navigate(['/listquiz']);
}


}
