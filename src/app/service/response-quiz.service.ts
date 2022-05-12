import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseQuiz } from '../model/ResponseQuiz';

@Injectable({
  providedIn: 'root'
})
export class ResponseQuizService {

  constructor(private http: HttpClient) { }

  AddResponse(response:ResponseQuiz ,idQuiz : any,idUser:number){
    return this.http.post(`http://localhost:8089/SpringMVC/Response/add-response/${idQuiz}/${idUser}`,response);
  }
}
