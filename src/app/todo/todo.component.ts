import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private api:ApiserviceService) { 
    api.viewtodo().subscribe(
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
