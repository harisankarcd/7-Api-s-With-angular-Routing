import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
  viewproducts=()=>
  {
    return this.http.get("https://fakestoreapi.com/products")
  }
  viewnews=()=>
  {
    return this.http.get("https://newsapi.org/v2/everything?q=apple&from=2022-07-22&to=2022-07-22&sortBy=popularity&apiKey=68cfcbebfe384bda8381012fd6c98d7a")
  }
  viewtodo=()=>
  {
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }
  viewposts=()=>
  {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
  viewusers=()=>
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
  viewalbums=()=>
  {return this.http.get("https://jsonplaceholder.typicode.com/albums")
  }
  viewphotos=()=>
  {
    return this.http.get("https://jsonplaceholder.typicode.com/photos")
  }
}
