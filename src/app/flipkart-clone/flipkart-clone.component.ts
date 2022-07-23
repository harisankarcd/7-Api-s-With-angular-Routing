import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-flipkart-clone',
  templateUrl: './flipkart-clone.component.html',
  styleUrls: ['./flipkart-clone.component.css']
})
export class FlipkartCloneComponent implements OnInit {

  constructor(private api:ApiserviceService) { 
    api.viewproducts().subscribe(
      (response)=>{
       this.data=response 
      }
    )
    
  }


  data:any=[]
  ngOnInit(): void {
  }

}
