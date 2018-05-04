import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { PostsComponent } from './admin/posts/posts.component';
import { NewPostComponent } from './admin/new-post/new-post.component';
import { PostComponent } from './blog/post/post.component';
import { BlogComponent } from './blog/blog.component';
import { RegistrationsComponent } from './admin/registrations/registrations.component';
import { RegistrationComponent } from './registration/registration.component';
import { SliderComponent } from './admin/slider/slider.component';

import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin/slider', component: SliderComponent, canActivate: [AuthGuard]},
  {path: 'admin/posts', component: PostsComponent, canActivate: [AuthGuard]},
  {path: 'admin/post/:id', component: NewPostComponent, canActivate: [AuthGuard]},
  {path: 'admin/post', component: NewPostComponent, canActivate: [AuthGuard]},
  {path: 'admin/registrations', component: RegistrationsComponent, canActivate: [AuthGuard]},
  {path: 'naujienos/:slug', component: PostComponent},
  {path: 'naujienos', component: BlogComponent},
  {path: 'registracija', component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }