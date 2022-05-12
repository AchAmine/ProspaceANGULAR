import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from 'src/app/model/Question';
import { Quiz } from 'src/app/model/Quiz';
import { QuestionService } from 'src/app/service/question.service';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-list-quiz-questions-back',
  templateUrl: './list-quiz-questions-back.component.html',
  styleUrls: ['./list-quiz-questions-back.component.css']
})
export class ListQuizQuestionsBackComponent implements OnInit {
  listQuiz?: any;
  quiz :  Quiz=new Quiz();
  Question: Question=new Question();
  form: boolean=false;
  id: number;
  listQuestions?: any
  question: Observable<Question[]>
  constructor(private questionService :QuestionService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("ID  ",this.id);
    this.getAllQuizQuestions();;

    console.log("GET QUIZ : ",this.quiz.idQuizz);
  }
 
  getAllQuizQuestions(){
    this.questionService.getQuizQuestions(this.id).subscribe(res=> { this.listQuestions=res; console.log(res);})
  }
 
  addQuizQuestion(Quiz: any){
    this.router.navigate(['/dashboard/addquizquestions'],Quiz);
  }
  
  deleteQuizQuestion(idQuestion : any){
    this.questionService.deleteQuizQuestion(idQuestion).subscribe(() => this.getAllQuizQuestions());

}
getQuizQuestionAnswers(Question: any){
  this.router.navigate(['/dashboard/quizquestionAnswers', Question]);
}
editQuizQuestions(){
  this.router.navigate([`/dashboard/editquizquestion/${this.route.snapshot.params.id}`]);
}
Cancel() {
  this.router.navigate(['/dashboard/listquiz']);
}

}