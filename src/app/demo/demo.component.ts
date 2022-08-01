import { Component, OnInit } from '@angular/core';
import {  
  AmazonLoginProvider, 
  FacebookLoginProvider, gLabel, GoogleLoginProvider, 
  GoogleSigninButtonOptions, gShape, ButtonSize, gTheme, gType, 
  MicrosoftLoginProvider, SocialAuthService, SocialUser, VKLoginProvider, SocialSigninButtonOptions, Shape, Provider } from 'projects/lib/src/public-api';

@Component({
  selector: 'lib-app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  user: SocialUser | undefined;
  GoogleLoginProvider = GoogleLoginProvider;
  
  gOptions : GoogleSigninButtonOptions = {
    Label: gLabel.SigninWith,
    Shape: gShape.Pill,
    Size: ButtonSize.Large,
    Theme: gTheme.FilledBlue,
    Type: gType.Standard,
  };

  fbOptions : SocialSigninButtonOptions = {
    Label: "Sign in with Facebook",
    Shape: Shape.Pill,
    Provider: Provider.Facebook
  };

  msOptions : SocialSigninButtonOptions = {
    Label: "Sign in with Microsoft",
    Shape: Shape.Pill,
    Provider: Provider.Microsoft
  };

  constructor(private readonly _authService: SocialAuthService) {}

  ngOnInit() {
    this._authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  signInWithFB(): void {
    this._authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithVK(): void {
    this._authService.signIn(VKLoginProvider.PROVIDER_ID);
  }

  signInWithMicrosoft(): void {
    this._authService.signIn(MicrosoftLoginProvider.PROVIDER_ID);
  }

  signInWithAmazon(): void {
    this._authService.signIn(AmazonLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this._authService.signOut();
  }

  refreshGoogleToken(): void {
    this._authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
