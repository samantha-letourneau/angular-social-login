import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DemoComponent } from './demo/demo.component';
import { SocialLoginModule } from 'projects/lib/src/sociallogin.module';
import { AmazonLoginProvider, FacebookLoginProvider, GoogleLoginProvider, GoogleSigninButtonDirective, MicrosoftLoginProvider, SocialAuthServiceConfig, VKLoginProvider } from 'projects/lib/src/public-api';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, DemoComponent],
  imports: [BrowserModule, FormsModule, SocialLoginModule, AppRoutingModule],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '405398231793-ef2lhe0ocu3a17s8srhhvc8f60n2haok.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1057255155178956'),
          },
          // {
          //   id: AmazonLoginProvider.PROVIDER_ID,
          //   provider: new AmazonLoginProvider(
          //     'amzn1.application-oa2-client.f074ae67c0a146b6902cc0c4a3297935'
          //   ),
          // },
          // {
          //   id: VKLoginProvider.PROVIDER_ID,
          //   provider: new VKLoginProvider('7624815'),
          // },
          {
            id: MicrosoftLoginProvider.PROVIDER_ID,
            provider: new MicrosoftLoginProvider(
              'cf6e5c71-b50e-401e-a22d-edb5fb16d914'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}
