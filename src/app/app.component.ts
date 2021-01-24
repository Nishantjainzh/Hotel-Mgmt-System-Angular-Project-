import { Component } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user_info=localStorage.getItem('user_session');
  base_url='http://localhost/angular/';
  subscribeForm:FormGroup
  constructor(private fb:FormBuilder, private http:HttpClient){
    this.subscribeForm=fb.group({
      'email':''
    });
  }
  getSubscribe(subscribeForm){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options={
      headers:headers,
    };
    this.http.post(this.base_url+'/public/api/subscribe',subscribeForm.value,options).subscribe((data)=>{
      let resp1= Array.from(Object.keys(data), k=>data[k]);
      if(resp1[0]=='true'){
        console.log(data);
        this.subscribeForm.reset();
        alert('Email has been successfully subscribe!')
      }
      else{
        alert('Please try again!!')
      }
      console.log(data);
    })
    console.log(subscribeForm.value)
  }
  
}
