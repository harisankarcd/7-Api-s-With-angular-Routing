import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(api:ApiserviceService) {
    api.viewnews().subscribe(
      (response)=>{
        this.data=response
      }
    )

   }

  data:any=[]
  ngOnInit(): void {
  }

}
