import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/app/model/Answer';
import { Quiz } from 'src/app/model/Quiz';
import { ResponseQuiz } from 'src/app/model/ResponseQuiz';
import { QuestionService } from 'src/app/service/question.service';
import { QuizService } from 'src/app/service/quiz.service';
import { ResponseQuizService } from 'src/app/service/response-quiz.service';

@Component({
  selector: 'app-start-quiz-front',
  templateUrl: './start-quiz-front.component.html',
  styleUrls: ['./start-quiz-front.component.css']
})
export class StartQuizFrontComponent implements OnInit {
questions: any;

marksGot=0;
correctAnswers=0;
attempted=0;
Response :  ResponseQuiz=new ResponseQuiz();
listResp: Answer[] = [];
form: boolean=false;
q: any; 
isSubmit=false;
StartQuizFrontFormGroup!: FormGroup;
quizzId : any;
quiz : Quiz = new Quiz();
// static user
  iduser = 1 ;

  constructor(private route: ActivatedRoute, private questionService: QuestionService,
    private responseService: ResponseQuizService,private router: Router , private quizService : QuizService
   ){ }

  ngOnInit(): void {
    this.quizzId = this.route.snapshot.params.id; 
    this.quizService.getQuiz(this.quizzId).subscribe(data => this.quiz = data);
    this.loadQuestions();
    

  }
  loadQuestions() {
this.questionService.getQuizQuestionsForTest(this.quizzId).subscribe(
  (data: any)=>{
    this.questions=data;
    console.log(data);
    this.questions.forEach((question: any)=>{
     question['givenAnswer']='';
      
      this.StartQuizFrontFormGroup = new FormGroup({
        answer: new FormControl(),
        
    });
      
    })
  }
);
  }
  public resultQuiz(){
    
    

  }
  selectedAnswers(reponse : Answer){
    if (this.listResp.includes(reponse)) {
      const index = this.listResp.indexOf(reponse);
      this.listResp.splice(index);
    } else {
    this.listResp.push(reponse);
    console.log(this.listResp);
    }
  }
  public submitQuiz(){
   for (let resp of this.listResp) {
     console.log("Resp : ",resp);
    this.Response.selectedAnswers?.push(resp);
    console.log("responses :",this.Response.selectedAnswers);
    }
    this.Response.quizz = this.quiz; 
    console.log("Quiz : -------", this.quiz);
    console.log("Response -------------: ",this.Response); 
    console.log("Selected answers --------",this.Response.selectedAnswers);
  //  this.Response.user = this.iduser; 
     this.responseService.AddResponse(this.Response,this.quizzId).subscribe(() => {
      // this.getAllQuiz();
       this.form = false;
     }); 
   
  }
  
  

}
