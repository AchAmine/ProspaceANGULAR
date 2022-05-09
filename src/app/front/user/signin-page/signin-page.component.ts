import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/model/LoginRequest';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent implements OnInit {

  loginRequest:LoginRequest;
  isLoading:any=false;

  constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
    //this.isLoading=false;
    this.loginRequest = {
      username: null,
      password: null
    
    }
  }
  signin(loginRequest:LoginRequest){
    console.log("*****************login***************")
    console.log("ddd---->",loginRequest)
    this.isLoading=true;
    this.userService.signin(loginRequest).subscribe(
      (res: any) => {
        
        console.log(res);
  
        this.userService.setSession(res);
        console.log(res.status);
        this.isLoading=false;
        this.router.navigateByUrl('/home'); 
    }/*,errorRes => {
      if (errorRes.error.status == 200) {
        console.log(errorRes.error.status)
        this.isLoading=false;
        this.router.navigateByUrl('/homeAuthIn');
        
        
      }
      else{
        this.isLoading=false;
      }
      
    }*/
    
    );
  }
 /* openSignupPopup(){
    
    this.dialogRef.open(SignupPageComponent);
  }*/

}
