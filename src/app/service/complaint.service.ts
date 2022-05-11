import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { complaints } from '../model/complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  addReclamation(newReclamation: complaints) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'http://localhost:8089/SpringMVC/getAllComplaints'

  constructor(private http: HttpClient) { }

  public getAllcomplaint(){
  
    return this.http.get(`${this.baseUrl}/retrieve-all-articles`);
 
  } 

  public addComplaint (complaints: any){
    return this.http.post(`${this.baseUrl}/ajoutComplaint`,complaints);
  }

  public editComplaint(complaints: any) 
  {
   return  this.http.put(`${this.baseUrl}/updateComplaint`,complaints)
  }
}
