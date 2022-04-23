import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlecommentsService {

  private baseUrl = 'http://localhost:8089/SpringMVC/Article_comments'
  constructor(private http: HttpClient) { }

  public getAllComments(articleId: any){
    return this.http.get(`${this.baseUrl}/retrieve-articlecomments/${articleId}`);
  } 
  public addComment(comment: any,articleId: any){
    return this.http.post(`${this.baseUrl}/add-comment/${articleId}/1`,comment);
  }

  public deleteComment(commentId: any) {
    return this.http.delete(`${this.baseUrl}/remove-comment/${commentId}`);
  }

  public editComment(comment: any) 
  {
   return  this.http.put(`${this.baseUrl}/modify-comment`,comment)
  }

  

}
