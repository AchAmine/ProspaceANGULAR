import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http: HttpClient) { }

  public getAllSections(){
    return this.http.get(`http://localhost:8089/SpringMVC/Section//retrieve-all-sections`);
  } 
  public addSection(section: any,userid: any){
    return this.http.post(`http://localhost:8089/SpringMVC/Section//add-section/${userid}`,section);
  }

  deleteSection(idSection : any){
    return  this.http.delete(`http://localhost:8089/SpringMVC/Section/remove-section/${idSection}`)
  }
  public editSection(section: any) 
  {
   return  this.http.put(`http://localhost:8089/SpringMVC/Section/modify-section`,section)
  }

  getSection(id: number){
    return this.http.get(`http://localhost:8089/SpringMVC/Section/retrieve-section/${id}`);
  }
}
