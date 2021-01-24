import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  all_services:any;
  base_url='http://localhost/angular/';
  constructor(private http:HttpClient) {}

    getData(){
    return this.http.get(this.base_url+'public/api/service_new');
    }
    
}
