import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private api:ApiserviceService) {
    api.viewposts().subscribe(
      (response)=>{
        this.data=response
      }
    )
   }
data:any=[]
  ngOnInit(): void {
  }

}
