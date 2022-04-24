import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/model/Quiz';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-updatequiz-back',
  templateUrl: './updatequiz-back.component.html',
  styleUrls: ['./updatequiz-back.component.css']
})
export class UpdatequizBackComponent implements OnInit {

  id: number;
  quiz: Quiz = new Quiz();
  form: FormGroup;
  constructor(private quizService: QuizService,private router: Router,private route: ActivatedRoute,public fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("ID  ",this.id);
    this.quizService.getQuiz(this.id).subscribe(data => {
      this.quiz = data;
      console.log("DATA :",data);}
      
      );
    console.log("GET QUIZ : ",this.quiz.idQuizz);
    
  }


  editQuiz(quizz: Quiz) {
    console.log("quiz 1 : ",quizz);
    
  this.quizService.editQuiz(quizz).subscribe();
  this.router.navigate(['/listquiz']);
    
  }

  Cancel() {
    this.router.navigate(['/listquiz']);
  }

}
