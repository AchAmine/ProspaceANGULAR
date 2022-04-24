import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }

  public getAllQuiz(){
    return this.http.get(`http://localhost:8089/SpringMVC/Offer/retrieve-all-offers`);
  } 
  public addQuiz(quiz: any){
    return this.http.post(`http://localhost:8089/SpringMVC/Offer/add-offer/1`,quiz);
  }

  deleteQuiz(idQuiz : any){
    return  this.http.delete(`http://localhost:8089/SpringMVC/Offer/remove-Offer/${idQuiz}`)
  }
  public editQuiz(quiz: any) 
  {
   return  this.http.put(`http://localhost:8089/SpringMVC/Offer/modify-offer`,quiz)
  }

  getQuiz(id: number){
    return this.http.get(`http://localhost:8089/SpringMVC/Offer/modify-offer/${id}`);
  }
}
