import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Formation } from '../model/Formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private httpClient:HttpClient) { }
  readonly API_URL='http://127.0.0.1:8089/SpringMVC/formation';
  getUndeletedAndCurrentFormation(): Observable<Formation[]>{
    return  this.httpClient.get<Formation[]>(this.API_URL+'/getundCufor');
  }
  paticiper(idf:any,idu:any){
   return this.httpClient.get(this.API_URL+'/participerformation/'+idf+'/'+idu);
  }
  getCurrentUserFormation():Observable<Formation[]>{
    return this.httpClient.get<Formation[]>(this.API_URL+'/getCurrentUserFormation');
  }
}
