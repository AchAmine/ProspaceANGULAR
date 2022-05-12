import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/model/Quiz';
import { PdfquizService } from 'src/app/service/pdfquiz.service';
import { QuizService } from 'src/app/service/quiz.service';
import { ResultQuizService } from 'src/app/service/result-quiz.service';

@Component({
  selector: 'app-show-result-quiz-front',
  templateUrl: './show-result-quiz-front.component.html',
  styleUrls: ['./show-result-quiz-front.component.css']
})
export class ShowResultQuizFrontComponent implements OnInit {
  form: boolean=false;
  listQuizQuestions? : any;
  quizz: Observable<Quiz[]>
  listTop3ResultQuiz?: any;

  ResultQuiz:any;
  // user static
  idUser = 1 ;
  constructor(private quizService :QuizService,
    private resultQuizService :ResultQuizService, private router: Router,private route: ActivatedRoute,
    private pdfquizService :PdfquizService) { }

  ngOnInit(): void 
    {
      this.getResultQuiz(this.route.snapshot.params.id);
    }
    getResultQuiz(idQuiz: any){
      this.resultQuizService.userResult(this.route.snapshot.params.id,this.idUser).subscribe(res=> { 
        this.ResultQuiz=res; console.log(res);})
    }

    public getQuizCertif(){
      this.pdfquizService.getQuizCertif(this.route.snapshot.params.id,this.idUser).subscribe(x=>{
        const blob = new Blob([x],{type:'application/pdf'});
        const nav = (window.navigator as any);
        if(window.navigator && nav.msSaveOrOpenBlob){
          nav.msSaveOrOpenBlob(blob);
          return ;
        }
        const data = window.URL.createObjectURL(blob);
        const link= document.createElement('a');
        link.href=data;
        link.download='certif.pdf';
        link.dispatchEvent(new MouseEvent('click',{
          bubbles: true, cancelable: true, view: window
        }));
        setTimeout(function(){
          window.URL.revokeObjectURL(data);
          link.remove();
  
        },100);
  
        
       
      });
  
      
    }
    public Top3QuizResults(){

      this.resultQuizService.Top3QuizResults(this.route.snapshot.params.id).subscribe(res=> { this.listTop3ResultQuiz=res; console.log(res);})
  }

}
