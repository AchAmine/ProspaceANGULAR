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
  categories : any = [];
		category: any;
  constructor(private quizService: QuizService,private router: Router, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.categories = ['General knowledge','Sports','History','Art and Literature'];
   
  }

  getAllQuiz(){
    this.quizService.getAllQuiz().subscribe(res=>this.listQuiz=res)
  }
addQuiz(quiz: any) {
  quiz.categorie = this.category;
  this.quizService.addQuiz(quiz).subscribe(() => {
   // this.getAllQuiz();
   this.router.navigate(['/listquiz']);
    this.form = false;
  });
}

getCategory(event: any) {
  if (event.target.value != 0) {
   console.log("category",event.target.value);
    this.category = event.target.value;
  } 
}

Cancel() {
  this.router.navigate(['/listquiz']);
}


}
