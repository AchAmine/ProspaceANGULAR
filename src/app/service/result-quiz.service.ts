import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultQuizService {

  constructor(private http: HttpClient) { }

  public getResultQuiz(idQuiz:number,idUser:number){
    return this.http.get(`http://localhost:8089/SpringMVC/Quizz/Score/${idQuiz}/${idUser}`);
  } 

  public getUserResult(idQuiz:number,idUser:number){
    return this.http.get(`http://localhost:8089/SpringMVC/Quizz/Score/user-result/${idQuiz}/${idUser}`);
  } 
  public Top3QuizResults(idQuiz:number){
    return this.http.get(`http://localhost:8089/SpringMVC/Quizz/Score/TOP3/${idQuiz}`);
    
  } 
  public getAllResults(){
    return this.http.get(`http://localhost:8089/SpringMVC/Quizz/Score/getAll-results`);

  } 
  
}