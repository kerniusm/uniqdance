import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TinyMceModule, tinymceDefaultSettings } from 'angular-tinymce';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainSlideComponent } from './home/main-slide/main-slide.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { FooterComponent } from './ui/footer/footer.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { ImageSliderComponent } from './home/image-slider/image-slider.component';
import { ServicesComponent } from './home/services/services.component';
import { CalendarComponent } from './home/calendar/calendar.component';
import { SponsorsComponent } from './home/sponsors/sponsors.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './admin/login/login.component';
import { PostsComponent } from './admin/posts/posts.component';
import { RegistrationsComponent } from './admin/registrations/registrations.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { PricesComponent } from './home/prices/prices.component';
import { NewsComponent } from './home/news/news.component';
import { BlogComponent } from './blog/blog.component';

import { AuthService } from './core/auth.service';
import { PostService } from './core/post.service';
import { RegistrationsService } from './core/registrations.service';
import { NewPostComponent } from './admin/new-post/new-post.component';
import { PostComponent } from './blog/post/post.component';
import { SliderComponent } from './admin/slider/slider.component';
import { AuthGuard } from './core/auth.guard';
import { SliderService } from './core/slider.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainSlideComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    ImageSliderComponent,
    ServicesComponent,
    CalendarComponent,
    SponsorsComponent,
    RegistrationComponent,
    LoginComponent,
    PostsComponent,
    RegistrationsComponent,
    PricesComponent,
    NewsComponent,
    BlogComponent,
    NewPostComponent,
    PostComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot(),
    TinyMceModule.forRoot(tinymceDefaultSettings())
  ],
  providers: [AuthService, PostService, RegistrationsService, AuthGuard, SliderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
