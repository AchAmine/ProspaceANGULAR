import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlereactionService {

  private baseUrl = 'http://localhost:8089/SpringMVC/Article_reactions'

  userId: string;
  emojiList = ['like', 'love','haha']

  constructor(private http: HttpClient) { }

  public getAllReactions(articleId: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/retrieve-articlereactions/${articleId}`);
  } 

  public deleteReaction(reactionId: any) {
    return this.http.delete(`${this.baseUrl}/remove-reaction/${reactionId}`);
  }

  public addReaction(article: any, user: any){
    return this.http.post(`${this.baseUrl}/add-reaction/1`,article);
  }
}
