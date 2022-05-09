import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private baseUrl = 'http://localhost:8089/SpringMVC/Topic'

  constructor(private http: HttpClient) { }

  public getAllTopics(sectionid:any){
    return this.http.get(`http://localhost:8089/SpringMVC/Topic//retrieve-all-topics/${sectionid}`);
  } 
  public addTopic(topic: any,sectionid:any){
    return this.http.post(`http://localhost:8089/SpringMVC/Topic//add-topic/1/${sectionid}`,topic);
  }

  deleteTopic(idTopic : any){
    return  this.http.delete(`http://localhost:8089/SpringMVC/Topic/remove-topic/${idTopic}`)
  }
  public editTopic(topic: any) 
  {
   return  this.http.put(`http://localhost:8089/SpringMVC/Topic/modify-topic`,topic)
  }

  getTopic(id: number){   
    return this.http.get(`http://localhost:8089/SpringMVC/Topic/retrieve-topic/${id}`);
  }
  
  public viewInc(topic: any) 
  {
   return  this.http.put(`${this.baseUrl}/viewinc`,topic);
  }



}
