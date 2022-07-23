import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(private api:ApiserviceService) {
    api.viewphotos().subscribe(
      (response)=>
      {
        this.data=response
      }
    )
   }
data:any=[]
  ngOnInit(): void {
  }

}
