import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { experiences } from '../model/experiences';
import { LoginRequest } from '../model/LoginRequest';
import { profile } from '../model/profile';
import { SignupRequest } from '../model/SignupRequest';
import { skill } from '../model/skill';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 readonly API_URL='http://127.0.0.1:8089/SpringMVC/User';
 id:any;
 req:HttpRequest<any>;
  constructor(private httpClient:HttpClient) { }
  isLogged(){
    return localStorage.getItem('token')!=null;
  }
  getCurrentToken(){
    return localStorage.getItem('token');
  }
  signin(loginRequest:LoginRequest){

    const body=JSON.stringify(loginRequest);
    const headers={ 'content-type':'application/json'}

    return this.httpClient.post(this.API_URL+'/signin',loginRequest,{'headers':headers})
  }
  setSession(authResult:any){
    
    localStorage.setItem('token',authResult.accessToken);
    //localStorage.setItem('email',authResult.idUser);
  }
  logout(){
    localStorage.clear();
  }
 
 getConnectedUser(){
   return this.httpClient.get(this.API_URL+'/getConnectedUser');
 }
getCurrentUserName(){        
    return this.httpClient.get(this.API_URL+'/getCurrentUserName',{responseType: 'text'});
  }
  dispalyusername(){
    
   return this.getOneUserByUserName(this.getCurrentUserName());
    
  }
 getOneUserByUserName(username:any){
  let request :String=(this.API_URL+`/getuserByUsername/${username}`);
  console.log("in service"+request);
  // return this.httpClient.get(request);
 }

      getCurrentUserId(){
        return this.httpClient.get(this.API_URL+'/getCurrentUserId');
      }
      getProfile(){
        return this.httpClient.get(this.API_URL+'/getProfile/'+this.getCurrentUserId());
      }
      getskill(){
        return this.httpClient.get(this.API_URL+'/getSkill/'+this.getCurrentUserId());
      }
  signup(signupRequest:SignupRequest){   
    return this.httpClient.post(this.API_URL+'/adduser',signupRequest);
  }
  frogotpassword(username:string){
   
   console.log(username);
    return this.httpClient.post(this.API_URL+`/forgot/${username}`,"");

  }
  saveExp(e:experiences){

    return this.httpClient.post(this.API_URL+'/saveEx',e);
  }
 saveSkill(s:skill){
    
    return this.httpClient.post(this.API_URL+'/saveSkk',s);
  }
affecterSkillToUser(ids:any,idu:any){
  return this.httpClient.put(this.API_URL+'/affecterSkillToUser/'+ids+'/'+idu,"");
}
affecterExpToSkill(ids:any,ide:any){
  return this.httpClient.put(this.API_URL+'/affecterExpToSkill/'+ids+'/'+ide,"");
}
deleteUser(idu:any){
  return this.httpClient.put(this.API_URL+'/deleteuser/'+idu,"");
}
updateUser(u:profile){
  return this.httpClient.put(this.API_URL+'/updateuser',u);
}

 
}
