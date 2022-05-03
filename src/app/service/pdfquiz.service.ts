import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfquizService {

  constructor(private http: HttpClient) { }



   getQuizCertif(idQuiz:any,idUser:any):Observable<Blob>{
    return this.http.get(`http://localhost:8089/SpringMVC/pdf/generate/${idQuiz}/${idUser}`,{responseType:'blob'});
  } 
}