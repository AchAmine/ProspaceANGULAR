import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/app/model/Answer';
import { Quiz } from 'src/app/model/Quiz';
import { ResponseQuiz } from 'src/app/model/ResponseQuiz';
import { ResultQuiz } from 'src/app/model/ResultQuiz';
import { QuestionService } from 'src/app/service/question.service';
import { QuizService } from 'src/app/service/quiz.service';
import { ResponseQuizService } from 'src/app/service/response-quiz.service';
import { ResultQuizService } from 'src/app/service/result-quiz.service';

@Component({
  selector: 'app-start-quiz-front',
  templateUrl: './start-quiz-front.component.html',
  styleUrls: ['./start-quiz-front.component.css']
})
export class StartQuizFrontComponent implements OnInit {
   aFormGroup: FormGroup;

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
resultQuizz: ResultQuiz = new ResultQuiz();
timer: any;
// static user
  iduser = 1 ;

  constructor(private route: ActivatedRoute, private questionService: QuestionService,
    private responseService: ResponseQuizService,private router: Router , private quizService : QuizService
   ,private resultQuizService : ResultQuizService,public formBuilder: FormBuilder
   ){ }

  ngOnInit(): void {
  
    this.quizzId = this.route.snapshot.params.id; 
    this.quizService.getQuiz(this.quizzId).subscribe(data => this.quiz = data);
    
    this.loadQuestions();
    

    

  }
  siteKey:string="6LfLGMUfAAAAAGhGpj1BOBPzXccGwpb3lg6-jgw4";
  loadQuestions() {
this.questionService.getQuizQuestionsForTest(this.quizzId).subscribe(
  (data: any)=>{
    this.questions=data;
    console.log(data);
    this.questions.forEach((question: any)=>{
      this.timer=this.questions.length*2*60;

     question['givenAnswer']='';
      
      this.StartQuizFrontFormGroup = new FormGroup({
        answer: new FormControl(),
        
        
    });
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
      this.startTimer();
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
      
      this.router.navigate([`resultQuiz/${this.route.snapshot.params.id}`]);
      // this.getAllQuiz();
       this.form = false;
 
     });
     
   
  }

  startTimer(){
    let t=window.setInterval(()=>{
      if(this.timer<=0){
        this.submitQuiz();
        clearInterval(t);

      }else{
        this.timer--;
      }


    },1000);
  }


  getFormattedTime(){
    let mm= Math.floor(this.timer /60);
    let ss=this.timer - mm * 60;
    return `${mm} min : ${ss} sec `;
  }

}
  
  


