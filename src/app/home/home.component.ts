import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  all_services:any;
  base_url='http://localhost/angular/';
  contactform:FormGroup;
  constructor(private fb:FormBuilder, private http:HttpClient){
    this.contactform=fb.group({
      name:'',
      email:'',
      mobile_no:'',
      message:''
    });
  }
  ngOnInit(): void {
    this.http.get(this.base_url+'public/api/service').subscribe((data)=>{
      let resp1= Array.from(Object.keys(data), k=>data[k]);
      if(resp1[0]=='true'){
        this.all_services=resp1[1];
      }
      
    });
  }
  save_contact(contactform)
  {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options = {
      headers: headers,
    };
    this.http.post(this.base_url+'public/api/contact_form',contactform.value,options).subscribe((data)=>{
      let resp1= Array.from(Object.keys(data), k=>data[k]);
      if(resp1[0]=='true'){
        this.contactform.reset()
        alert("Contact information sent successfully!")
      }
      else{
        alert("Please try again!");
      }
      //console.log(data);
    })
    console.log(contactform.value);
  }

}
