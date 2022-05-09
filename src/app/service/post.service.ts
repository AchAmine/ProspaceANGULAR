import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getAllposts(topicid:any){
    return this.http.get(`http://localhost:8089/SpringMVC/Post//find-all-posts/${topicid}`);
  } 
  public addPost(post: any,topicid:any){
    return this.http.post(`http://localhost:8089/SpringMVC/Post//add-post/1/${topicid}`,post);
  }

  deletePost(idPost : any){
    return  this.http.delete(`http://localhost:8089/SpringMVC/Post/remove-post/${idPost}`)
  }
  public editPost(post: any) 
  {
   return  this.http.put(`http://localhost:8089/SpringMVC/Post/modify-post`,post)
  }

  getPost(id: number){   
    return this.http.get(`http://localhost:8089/SpringMVC/Post/find-post/${id}`);
  }
}
