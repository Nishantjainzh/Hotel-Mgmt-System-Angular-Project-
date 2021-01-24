import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  base_url = 'http://localhost/angular/';
  feedbackForm:FormGroup;
  constructor(private fb:FormBuilder, private http:HttpClient) {
    this.feedbackForm=fb.group({
      'name':'',
      'email':'',
      'rating':'',
      'review':''
    });
    
   }
   takeFeedback(feedbackForm){

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options = {
      headers: headers,
    };

    this.http.post(this.base_url+'public/api/feedback',feedbackForm.value,options).subscribe((data)=>{
      this.feedbackForm.reset();
      alert('Thank you for your valuable feedback !!')
      console.log(data);
      
    });
    console.log(feedbackForm.value)
  }

  ngOnInit(): void {
  }

}
