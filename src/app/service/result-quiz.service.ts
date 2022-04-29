import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultQuizService {

  constructor(private http: HttpClient) { }

  public getResultQuiz(idQuiz:any,idUser:any){
    return this.http.get(`http://localhost:8089/SpringMVC//Quizz/Score/${idQuiz}/1`);
  } 

}