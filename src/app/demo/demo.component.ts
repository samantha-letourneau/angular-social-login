import { Component, OnInit } from '@angular/core';
import { FacebookSigninButtonOptions, 
  fbLabel, fbLayout, AmazonLoginProvider, 
  FacebookLoginProvider, gLabel, GoogleLoginProvider, 
  GoogleSigninButtonOptions, gShape, ButtonSize, gTheme, gType, 
  MicrosoftLoginProvider, SocialAuthService, SocialUser, VKLoginProvider, MicrosoftSigninButtonOptions, msSvgImage } from 'projects/lib/src/public-api';

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
    Shape: gShape.Rectangular,
    Size: ButtonSize.Large,
    Theme: gTheme.FilledBlue,
    Type: gType.Standard,
    Width: 40
  };

  fbOptions : FacebookSigninButtonOptions = {
    Layout: fbLayout.Default,
    Label: fbLabel.LoginWith,
    Size: ButtonSize.Large,
    ActivateLogout: false,
    IncludeProfileNameIfAny: false,
    Width: 40
  };

  msOptions : MicrosoftSigninButtonOptions = {
    ButtonImage: msSvgImage.Light,
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
