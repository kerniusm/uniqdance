import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

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
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
