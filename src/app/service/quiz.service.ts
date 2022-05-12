import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl = 'http://localhost:8089/SpringMVC/Quizz'

  constructor(private http: HttpClient) { }

  public getAllQuiz(){
    return this.http.get(`http://localhost:8089/SpringMVC/Quizz/retrieve-all-Quizz`);
  } 
  public addQuiz(quiz: any,idUser:any){
    return this.http.post(`http://localhost:8089/SpringMVC/Quizz/add-quizz/${idUser}`,quiz);
  }

  deleteQuiz(idQuiz : any){
    return  this.http.delete(`http://localhost:8089/SpringMVC/Quizz/remove-Quizz/${idQuiz}`)
  }
  public editQuiz(quiz: any) 
  {
   return  this.http.put(`http://localhost:8089/SpringMVC/Quizz/modify-quizz`,quiz)
  }

  getQuiz(id: number){
    return this.http.get(`${this.baseUrl}/retrieve-quizz/${id}`);
  }
  getQuizQuestions(idQuiz: any){
    console.log("IDDDDDDDDDDD",idQuiz)

    return this.http.get(`http://localhost:8089/SpringMVC/Quizz/Question/retrieve-quizz-Questions/${idQuiz}`);
  }
  
}
