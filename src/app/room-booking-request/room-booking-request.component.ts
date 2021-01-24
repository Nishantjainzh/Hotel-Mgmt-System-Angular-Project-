import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-room-booking-request',
  templateUrl: './room-booking-request.component.html',
  styleUrls: ['./room-booking-request.component.css']
})
export class RoomBookingRequestComponent implements OnInit {
  base_url='http://localhost/angular';
  bookingForm:FormGroup;
  constructor(private fb:FormBuilder, private http:HttpClient) {
    this.bookingForm=fb.group({
      'name':'',
      'email':'',
      'mobile':'',
      'address':'',
      'from_date':'',
      'to_date':'',
      'no_of_member':'',
      'no_of_room':'',
      'room_type':''
    });
   }
   sendBookingData(bookingForm){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options={
      headers:headers,
    };
    
    this.http.post(this.base_url+'/public/api/room_booking_request',bookingForm.value,options).subscribe((data)=>{
      console.log(data);
      this.bookingForm.reset();
      alert('Room Booking Confirmed!');
     });
     console.log(bookingForm.value);
     
   }

  ngOnInit(): void {
  }

}
