import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { PostsComponent } from './admin/posts/posts.component';
import { NewPostComponent } from './admin/new-post/new-post.component';
import { BlogComponent } from './blog/blog.component';
import { RegistrationsComponent } from './admin/registrations/registrations.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'new-post/new', component: NewPostComponent},
  {path: 'new-post/:id', component: NewPostComponent},
  {path: 'naujienos', component: BlogComponent},
  {path: 'registrations', component: RegistrationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
