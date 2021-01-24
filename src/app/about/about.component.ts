import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  all_services:any;
  //data=[];
  constructor(private user:AboutService) {
    this.user.getData().subscribe(data=>{
     let resp1= Array.from(Object.keys(data), k=>data[k]);
      if(resp1[0]=='true'){
        this.all_services=resp1[1];
      }
      // console.log(data);
      // this.data=data;
      
    });
   }

  ngOnInit(): void {
  }

}
