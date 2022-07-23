import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlipkartCloneComponent } from './flipkart-clone/flipkart-clone.component';
import { TodoComponent } from './todo/todo.component';
import { NewsComponent } from './news/news.component';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users/users.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlipkartCloneComponent,
    TodoComponent,
    NewsComponent,
    PostsComponent,
    AlbumsComponent,
    PhotosComponent,
    UsersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
