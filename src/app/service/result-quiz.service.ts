import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultQuiz } from '../model/ResultQuiz';

@Injectable({
  providedIn: 'root'
})
export class ResultQuizService {

  constructor(private http: HttpClient) { }

  public getResultQuiz(idQuiz:number,idUser:number){
    return this.http.get(`http://localhost:8089/SpringMVC/Quizz/Score/${idQuiz}/${idUser}`);
  } 

  public userResultExists(idQuiz:number,idUser:number) {
return this.http.get(`http://localhost:8089/SpringMVC/Quizz/Score/user-result-Exists/${idQuiz}/${idUser}`);
    console.log("je suis la",this.http.get(`http://localhost:8089/SpringMVC/Quizz/Score/user-result-Exists/${idQuiz}/${idUser}`))
    
  
   
   
    return this.http.get(`http://localhost:8089/SpringMVC/Quizz/Score/user-result-Exists/1/1`);
  } 

  
  public userResult(idQuiz:number,idUser:number) {
    return this.http.get(`http://localhost:8089/SpringMVC/Quizz/Score/user-result/${idQuiz}/${idUser}`);
  } 
  public Top3QuizResults(idQuiz:number){
    return this.http.get(`http://localhost:8089/SpringMVC/Quizz/Score/TOP3/${idQuiz}`);
    
  } 
  public getAllResults() : Observable<ResultQuiz> {
    return this.http.get<ResultQuiz>(`http://localhost:8089/SpringMVC/Quizz/Score/getAll-results`);

  } 
  
}