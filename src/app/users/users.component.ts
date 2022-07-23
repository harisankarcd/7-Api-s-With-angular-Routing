import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private api:ApiserviceService) {
    api.viewusers().subscribe(
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
