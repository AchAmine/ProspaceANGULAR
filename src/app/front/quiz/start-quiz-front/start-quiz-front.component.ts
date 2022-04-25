import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-start-quiz-front',
  templateUrl: './start-quiz-front.component.html',
  styleUrls: ['./start-quiz-front.component.css']
})
export class StartQuizFrontComponent implements OnInit {
questions: any;
  constructor(private route: ActivatedRoute, private questionService: QuestionService) { }

  ngOnInit(): void {
    this.loadQuestions();
  }
  loadQuestions() {
this.questionService.getQuizQuestionsForTest(this.route.snapshot.params.id).subscribe(
  (data)=>{
    this.questions=data;
    console.log(data);
  }
);
  }

}
