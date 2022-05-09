import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class ArticlereactionService {

  private baseUrl = 'http://localhost:8089/SpringMVC/Article_reactions'

  emojiList = ['like', 'love','haha']

  constructor(private http: HttpClient) { }

  public getAllReactions(articleId: any){
    return this.http.get(`${this.baseUrl}/retrieve-articlereactions/${articleId}`);
  } 

  public deleteReaction(reactionId: any) {
    return this.http.delete(`${this.baseUrl}/remove-reaction/${reactionId}`);
  }

  public addReaction(article: any, user: any , reaction: any){
    return this.http.post(`${this.baseUrl}/add-reaction/${user}/${article}`,reaction);
  }

  public updateReaction(reaction: any){
    return this.http.put(`${this.baseUrl}/modify-reaction`,reaction);
  }

  public getUsersReaction(articleId: any) {
    return this.http.get(`${this.baseUrl}/retrieve-usersreaction/${articleId}`);
  }

  public getArticleReactorsByType(articleId: any , reactionType:any) : Observable<Number[]>{
    return this.http.get<Number[]>(`${this.baseUrl}/retrieve-articlereactors/${articleId}/type/${reactionType}`);
  }

  public getUserReaction(articleId: any , userId: any) {
    return this.http.get(`${this.baseUrl}/retrieve-user-reaction/${articleId}/${userId}`);
  }

  
}
