import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupRequest } from 'src/app/model/SignupRequest';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  signupRequest:SignupRequest;
  constructor(private router:Router,public userService:UserService,private fb: FormBuilder) { }
  registerForm = new FormGroup({
    username : new FormControl('', [Validators.required]),
    lastName : new FormControl('', [Validators.required] ),
   firstName : new FormControl('', [Validators.required]),
   birthdate : new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
   // passwords:this.fb.group({
      password1:new FormControl('',[Validators.required]),
      password2:new FormControl('',[Validators.required])//})
    
  });
  dateValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value) {
      const birthdate:Date = control.value;
      const today :Date=new Date();
      if ((birthdate.getTime<today.getTime)) {
        console.log('valid birthdate');
        return { 'invalidDate': true }
      
      }
    }
    return { 'validDate':false  };
  }
  

  ngOnInit(): void {
    this.signupRequest={
      firstName:null,
      lastName:null,
      userName:null,
      email:null,
      password:null,
      birthDate:null,
  }
  }
  signup(signupRequest:SignupRequest){
    this.userService.signup(signupRequest).subscribe();
    this.router.navigateByUrl('/login');
   console.log("buton work!!")
  }
 /* convertDate(date: any){
    return this.date = this.datepipe.transform(date, 'yyyy-MM-dd');
  }*/

}


