import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './list/list.component';
import { MoviesComponent } from './movies/movies.component';


import { ReactiveFormsModule } from '@angular/forms';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MoviesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [ {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '501064613644-8vq8jbjqc7sqb4cio567cg5tvll64ihk.apps.googleusercontent.com'
          )
        }
      ]
    } as SocialAuthServiceConfig,
  }    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
