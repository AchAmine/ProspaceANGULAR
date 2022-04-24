import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

  getQuizQuestionAnswers(idQuestion: any){
    return this.http.get(`http://localhost:8089/SpringMVC/Quizz/Question/Answers/retrieve-Question-Answers/${idQuestion}`);
  }

  AddQuizQuestionAnswer(Answer: any,idQuestion : any){
    return this.http.post(`http://localhost:8089/SpringMVC/Quizz/Question/Answers/add-answer/${idQuestion}`,Answer);
  }
  DeleteQuestionAnswer(idAnswer : any){
    return this.http.delete(`http://localhost:8089/SpringMVC/Quizz/Question/Answers/remove-Answer/${idAnswer}`);
  }





}
