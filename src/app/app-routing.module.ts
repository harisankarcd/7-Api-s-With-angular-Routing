import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AppComponent } from './app.component';
import { FlipkartCloneComponent } from './flipkart-clone/flipkart-clone.component';
import { NewsComponent } from './news/news.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { TodoComponent } from './todo/todo.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
{path:'',component:FlipkartCloneComponent},
{path:'news',component:NewsComponent},
{path:'todo',component:TodoComponent},
{path:'Posts',component:PostsComponent},
{path:'Users',component:UsersComponent},
{path:'Photos',component:PhotosComponent},
{path:'Albums',component:AlbumsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
