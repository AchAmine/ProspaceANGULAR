import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  getQuizQuestions(idQuiz: any){
    return this.http.get(`http://localhost:8089/SpringMVC/Quizz/Question/retrieve-quizz-Questions/${idQuiz}`);
  }
  deleteQuizQuestion(idQuestion : any){
    return  this.http.delete(`http://localhost:8089/SpringMVC/Quizz/Question/remove-Question/${idQuestion}`)
  }
  public addQuizQuestion(Question: any,idQuiz : any){

    return this.http.post(`http://localhost:8089/SpringMVC/Quizz/Question/add-question/${idQuiz}`,Question);
   

  }
  public editQuizQuestion(question: any,idQuiz : any) 
  {
   return  this.http.put(`http://localhost:8089/SpringMVC/Quizz/Question/modify-Question/${idQuiz}`,question)
  }

  getQuestion(id: number){
    return this.http.get(`http://localhost:8089/SpringMVC/Quizz/Question/retrieve-question/${id}`);

  }
  getQuizQuestionsForTest(idQuiz: any){
    return this.http.get(`http://localhost:8089/SpringMVC/Quizz/Question/retrieve-quizz-Questions/${idQuiz}`);
  }



}
