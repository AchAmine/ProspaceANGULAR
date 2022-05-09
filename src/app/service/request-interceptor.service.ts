import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let serviceUser = this.injector.get(UserService);
    if(serviceUser.getCurrentToken()){
      console.log(serviceUser.getCurrentToken());
      const tokenizedReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' +  serviceUser.getCurrentToken())
    });
    console.log("tokenizedReq-------->"+tokenizedReq);
  return next.handle(tokenizedReq);
  }
  else{return next.handle(req);}
  }
  

}
    


    
  

