import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  loginForm:FormGroup;
  base_url='http://localhost/angular/';
  signupForm:FormGroup;
  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router) {
    let user_info = localStorage.getItem('user_session');
    if(user_info){
      //this.router.navigate(['/']);
    }
   
    this.signupForm=fb.group({
      'name':'',
      'email':'',
      'mobile':'',
      'password':''
    });
    this.loginForm=fb.group({
      'email':'',
      'password':''
    });
   }
   getSignupData(signupForm){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options = {
      headers: headers,
    };

    this.http.post(this.base_url+'public/api/signup',signupForm.value,options).subscribe((data)=>{
        alert('User has been registered successfully.!!');
        this.signupForm.reset();
      });
     console.log(signupForm.value);
   }

   getLoginData(loginForm){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options = {
      headers: headers,
    };
     this.http.post(this.base_url+'public/api/login',loginForm.value,options).subscribe((data)=>{
      let resp1= Array.from(Object.keys(data), k=>data[k]);
       //console.log(resp1)
       if(resp1[0]=='true'){
         localStorage.setItem('user_session',resp1[1]);
         window.location.href="/";
        alert('User has been loggedin Successfully.!');
        this.loginForm.reset();
       }
       else{
         alert('Plase Try With correct Credential');
       }
       
     });
    console.log(loginForm.value);
    
   }


    ngOnInit(): void {
    }

}
