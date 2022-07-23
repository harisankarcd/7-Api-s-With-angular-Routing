import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private api:ApiserviceService) {
    api.viewalbums().subscribe(
      (response)=>{
        this.data=response
      }

    )
   }
data:any=[]
  ngOnInit(): void {
  }

}
