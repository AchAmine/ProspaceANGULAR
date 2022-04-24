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

  id: number;
  question: Question = new Question();
  quiz: Quiz = new Quiz();

  form: FormGroup;
  constructor(private quizService: QuizService,private questionService: QuestionService,private router: Router,private route: ActivatedRoute,public fb: FormBuilder) { }

  ngOnInit(): void {
 
    
  }

  getquizQuestions(){
    this.questionService.getQuizQuestions(this.id).subscribe(data => {
      this.question = data;
      console.log("DATAAA",data);

  });
}


  editQuizQuestion(question: Question) {
    
  this.questionService.editQuizQuestion(question,this.route.snapshot.params.id).subscribe();
    
  }

 

}
