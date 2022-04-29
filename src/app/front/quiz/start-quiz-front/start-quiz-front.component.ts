import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseQuiz } from 'src/app/model/ResponseQuiz';
import { QuestionService } from 'src/app/service/question.service';
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
listResp: any;
form: boolean=false;
q: any;
isSubmit=false;
StartQuizFrontFormGroup!: FormGroup;

  constructor(private route: ActivatedRoute, private questionService: QuestionService,
    private responseService: ResponseQuizService,private router: Router
   ){ }

  ngOnInit(): void {
    this.loadQuestions();
   
   
  }
  loadQuestions() {
this.questionService.getQuizQuestionsForTest(this.route.snapshot.params.id).subscribe(
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
  public submitQuiz(){
    this.responseService.AddResponse(this.listResp,this.route.snapshot.params.id).subscribe(() => {
      // this.getAllQuiz();
       this.form = false;
     });
  }
  
  

}
