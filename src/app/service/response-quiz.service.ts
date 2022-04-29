import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseQuizService {

  constructor(private http: HttpClient) { }

  AddResponse(response:Response ,idQuiz : any){
    return this.http.post(`http://localhost:8089/SpringMVC/Response/add-response/${idQuiz}/1`,response);
  }
}
