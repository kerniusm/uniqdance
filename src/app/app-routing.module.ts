import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { PostsComponent } from './admin/posts/posts.component';
import { NewPostComponent } from './admin/new-post/new-post.component';
import { BlogComponent } from './blog/blog.component';
import { RegistrationsComponent } from './admin/registrations/registrations.component';
import { RegistrationComponent } from './registration/registration.component';
<<<<<<< HEAD
import { SliderComponent } from './admin/slider/slider.component';
=======
import { AuthGuard } from './core/auth.guard';
>>>>>>> 851936298ad11a5b241993a005fef157e03a35fa

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
<<<<<<< HEAD
  {path: 'admin/posts', component: PostsComponent},
  {path: 'admin/post/:id', component: NewPostComponent},
  {path: 'admin/post', component: NewPostComponent},
  {path: 'admin/slider', component: SliderComponent},
=======
  {path: 'admin/posts', component: PostsComponent, canActivate: [AuthGuard]},
  {path: 'admin/post/:id', component: NewPostComponent, canActivate: [AuthGuard]},
  {path: 'admin/post', component: NewPostComponent, canActivate: [AuthGuard]},
  {path: 'admin/registrations', component: RegistrationsComponent, canActivate: [AuthGuard]},
>>>>>>> 851936298ad11a5b241993a005fef157e03a35fa
  {path: 'naujienos', component: BlogComponent},
  {path: 'registracija', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
