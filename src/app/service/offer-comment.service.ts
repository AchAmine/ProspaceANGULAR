import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfferComment } from '../model/OfferComment';

@Injectable({
  providedIn: 'root'
})
export class OfferCommentService {

  constructor(private http: HttpClient) { }

  public getAllOfferComments(offerId: number){
    return this.http.get(`http://localhost:8089/SpringMVC/OfferComments/retrieve-offer-comments/${offerId}`);
  } 
  public addComment(offercomment: OfferComment,offerId: number, userId: number){
    return this.http.post(`http://localhost:8089/SpringMVC/OfferComments/add-offer-comment/${offerId}/${userId}`,offercomment);
  }

  public deleteOfferComment(offercommentId: number) {
    return this.http.delete(`http://localhost:8089/SpringMVC/OfferComments/remove-offer-comment/${offercommentId}`);
  }

  public editOfferComment(offercomment: OfferComment) 
  {
   return  this.http.put(`http://localhost:8089/SpringMVC/OfferComments/modify-offer-comment`,offercomment)
  }

  public addOfferCommentReply(offercomment: OfferComment,offercommentId:number, userId: number) 
  {
    return this.http.post(`http://localhost:8089/SpringMVC/OfferComments/add-offer-comment-reply/${offercommentId}/${userId}`,offercomment);
  }
  public getAllOfferCommentReplies(offerId: number){
    return this.http.get(`http://localhost:8089/SpringMVC/OfferComments/retrieve-offer-comments/${offerId}`);
  } 
}
