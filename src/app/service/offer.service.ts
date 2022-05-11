import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from '../model/Offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }

  public getAllOffers(){
    return this.http.get(`http://localhost:8089/SpringMVC/Offer/retrieve-all-offers`);
  } 
  public addOffer(offer: any){
    return this.http.post(`http://localhost:8089/SpringMVC/Offer/add-offer/1`,offer);
  }

  deleteOffer(idOffer : any){
    return  this.http.delete(`http://localhost:8089/SpringMVC/Offer/remove-Offer/${idOffer}`)
  }
  public editOffer(offer: any) 
  {
   return  this.http.put(`http://localhost:8089/SpringMVC/Offer/modify-offer`,offer)
  }

  getOneOffer(id: number){
    return this.http.get(`http://localhost:8089/SpringMVC/Offer/retrieve-offer/${id}`);
  }
 

  TriOffer(){
    return this.http.get(`http://localhost:8089/SpringMVC/Offer/triOffers`);
  }

  getImage(path: any){
    return this.http.get(`http://localhost:8089/SpringMVC/Offer/image/${path}`);
  }

  
  uploadFile(file:any) {
    return this.http.post(`http://localhost:8089/SpringMVC/Offer/upload-file`,file);
  }

}
