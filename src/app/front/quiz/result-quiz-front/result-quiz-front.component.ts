import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/model/Quiz';
import { ResultQuiz } from 'src/app/model/ResultQuiz';
import { PdfquizService } from 'src/app/service/pdfquiz.service';
import { ResultQuizService } from 'src/app/service/result-quiz.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-result-quiz-front',
  templateUrl: './result-quiz-front.component.html',
  styleUrls: ['./result-quiz-front.component.css']
})
export class ResultQuizFrontComponent implements OnInit {

  ResultQuizList?: any;
  ResultQuiz :  ResultQuiz=new ResultQuiz();
  form: boolean=false;
  idQuiz:any;

 user: any;
 

  quizz: Observable<ResultQuiz[]>
  constructor(private resultQuizService :ResultQuizService, private router: Router,private route: ActivatedRoute,
    private pdfquizService :PdfquizService,private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getConnectedUser().subscribe(data => 
      {
        this.user = data;
        this.idQuiz = this.route.snapshot.params['idQuiz'];
        console.log("User",this.user);
        console.log("id quiz",this.idQuiz);
        this.getResultQuiz();
      });
    
   
  }
  getResultQuiz(){
    this.resultQuizService.getResultQuiz(this.idQuiz,this.user.idUser).subscribe(res=> { 
      this.ResultQuiz=res; console.log("resuult quiiz",this.idQuiz);})
  }

  public getQuizCertif(){
    this.pdfquizService.getQuizCertif(this.route.snapshot.params.id,this.user.idUser).subscribe(x=>{
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
}
