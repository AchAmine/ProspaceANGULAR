import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostCommentService {
  constructor(private http: HttpClient) { }

  public getAllComments(postid:any){
    return this.http.get(`http://localhost:8089/SpringMVC/Post_comments//retrieve-postcomments/${postid}`);
  } 
  public addComment(comment: any,postid:any){
    return this.http.post(`http://localhost:8089/SpringMVC/Post_comments//add-comment/1/${postid}`,comment);
  }

  deleteComment(idComment : any){
    return  this.http.delete(`http://localhost:8089/SpringMVC/Post_comments/delete-comment/${idComment}`)
  }
  public editComment(comment: any) 
  {
   return  this.http.put(`http://localhost:8089/SpringMVC/Post_comments/modify-comment`,comment)
  }

  getComment(id: number){   
    return this.http.get(`http://localhost:8089/SpringMVC/Post_comments/find-post/${id}`);
  }

///////////////////////////////////////////////////////////////////////////////////////

public addCommentReply(comment: any,commentid:any){
  return this.http.post(`http://localhost:8089/SpringMVC/Post_comments//add-comment-reply/1/${commentid}`,comment);
}
public editCommentReply(comment: any) 
{
 return  this.http.put(`http://localhost:8089/SpringMVC/Post_comments/modify-comment-reply`,comment)
}
public getAllCommentsreplies(commentid:any){
  return this.http.get(`http://localhost:8089/SpringMVC/Post_comments//retrieve-postcomments-replies/${commentid}`);
} 
/////////////////////////////////////////////////////////////////////////////////////////////////

public addPost_Reaction(forumReaction :any,postid:any){
  return this.http.post(`http://localhost:8089/SpringMVC/Forum-Reactions//add-reaction/1/${postid}`,forumReaction);
}
public removeReaction(reactionid:any){
  return this.http.delete(`http://localhost:8089/SpringMVC/Forum-Reactions///delete-reaction/1/${reactionid}`)
}

}
