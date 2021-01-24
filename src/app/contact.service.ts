import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  base_url="http://localhost/angular/";
  constructor(private http:HttpClient) { }
  setinfodata(){
   return this.http.get(this.base_url+'public/api/service');
  }

}
