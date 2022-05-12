import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/model/Quiz';
import { QuizService } from 'src/app/service/quiz.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-addquiz-back',
  templateUrl: './addquiz-back.component.html',
  styleUrls: ['./addquiz-back.component.css']
})
export class AddquizBackComponent implements OnInit {
  listQuiz?: any;
  quiz: Quiz = new Quiz();
  form: FormGroup;
  categories : any = [];
		category: any;
    user: any;
  constructor(private quizService: QuizService,private router: Router, public fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getConnectedUser().subscribe(data => this.user = data)

    this.categories = ['General knowledge','Sports','History','Art and Literature'];

    this.form= this.fb.group({
      quiz: [''],
      category:['', [Validators.required]],
      title:['', [Validators.required, Validators.minLength(5)]],
      nbQuestions:['', [Validators.required]],
      description:['', [Validators.required, Validators.minLength(20)]],

sendCatalog: false
    })
   
   
  }

  getAllQuiz(){
    this.quizService.getAllQuiz().subscribe(res=>this.listQuiz=res)
  }
addQuiz(quiz: any) {
  quiz.categorie = this.category;
  this.quizService.addQuiz(quiz,this.user.idUser).subscribe(() => {
   // this.getAllQuiz();
   this.router.navigate(['/dashboard/listquiz']);
  });
}

getCategory(event: any) {
  if (event.target.value != 0) {
   console.log("category",event.target.value);
    this.category = event.target.value;
  } 
}

Cancel() {
  this.router.navigate(['/dashboard/listquiz']);
}


}
