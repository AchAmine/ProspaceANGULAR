import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = 'http://localhost:8089/SpringMVC/Article'

  constructor(private http: HttpClient) { }

  public getAllArticles(){
    return this.http.get(`${this.baseUrl}/retrieve-all-articles`);
  } 
  public addArticle(article: any){
    return this.http.post(`${this.baseUrl}/add-article/1`,article);
  }

  public deleteArticle(articleId: any) {
    return this.http.delete(`${this.baseUrl}/remove-article/${articleId}`);
  }

  public editArticle(article: any) 
  {
   return  this.http.put(`${this.baseUrl}/modify-article`,article)
  }

  getArticle(id: number){
    return this.http.get(`${this.baseUrl}/retrieve-article/${id}`);
  }

  public viewInc(article: any) 
  {
   return  this.http.put(`${this.baseUrl}/viewinc`,article)
  }

  //
  getuserPreferences(idUser: number){
    return this.http.get(`${this.baseUrl}/userPreferences/user/${idUser}`);
  }

  getFollowingArticles(idUser: number){
    return this.http.get(`${this.baseUrl}/followingarticles/user/${idUser}`);
  }

  getImage(path: any){
    return this.http.get(`${this.baseUrl}/image/${path}`);
  }

  
}
