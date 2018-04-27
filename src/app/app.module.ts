import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

import { AuthService } from './core/auth.service';


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
    RegistrationsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
