import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rating } from '../model/Rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }


  public addRating(rating: Rating,idUser: number, idOffer: number){
    return this.http.post(`http://localhost:8089/SpringMVC/Offer/Rating/add-rating/${idUser}/${idOffer}`,rating);
  }

  deleteRating(idRating : any){
    return  this.http.delete(`http://localhost:8089/SpringMVC/Offer/Rating/remove-Rating/${idRating}`)
  }

  public editRating(rating: any) 
  {
   return  this.http.put(`http://localhost:8089/SpringMVC/Offer/Rating/edit-rating/`,rating)
  }
  public getRatings(idRating : any) {
    return this.http.get(`http://localhost:8089/SpringMVC/Offer/Rating/retrieve-offer-ratings/${idRating}`);
  }
  public getUserRating(idOffer : any , idUser : any) : Observable<Rating> {
    return this.http.get<Rating>(`http://localhost:8089/SpringMVC/Offer/Rating/user/${idUser}/offer-rating/${idOffer}`);
  }

}
