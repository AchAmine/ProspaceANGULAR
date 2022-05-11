import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/model/Question';
import { Quiz } from 'src/app/model/Quiz';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-addquizquestion-back',
  templateUrl: './addquizquestion-back.component.html',
  styleUrls: ['./addquizquestion-back.component.css']
})
export class AddquizquestionBackComponent implements OnInit {
  listQuestions?: any;
  question: Question = new Question();
  form: boolean=false;
  id?: any;
  quiz :  Quiz=new Quiz();
  constructor(private questionService: QuestionService,private router: Router, public fb: FormBuilder,private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  
  }
  getAllQuizQuestions(){
    this.questionService.getQuizQuestions(this.id).subscribe();  }
  addQuizQuestion(question: any) {
    this.questionService.addQuizQuestion(question,this.route.snapshot.params.id).subscribe(() => {
      // this.getAllQuiz();
      this.router.navigate([`quizquestions/${this.route.snapshot.params.id}`]);
       this.form = false;
     });
  }

  Cancel() {
    this.router.navigate([`quizquestions/${this.route.snapshot.params.id}`]);
  }

}
