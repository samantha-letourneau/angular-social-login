import { Component, OnInit } from '@angular/core';
import { AmazonLoginProvider, FacebookLoginProvider, gLabel, GoogleLoginProvider, GoogleSigninButtonDirective, GoogleSigninButtonOptions, gShape, gSize, gTheme, gType, MicrosoftLoginProvider, SocialAuthService, SocialUser, VKLoginProvider } from 'projects/lib/src/public-api';

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
    Size: gSize.Large,
    Theme: gTheme.FilledBlue,
    Type: gType.Standard,
    Width: 40
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

  signInWithAmazon(): void {
    this._authService.signIn(AmazonLoginProvider.PROVIDER_ID);
  }

  signInWithVK(): void {
    this._authService.signIn(VKLoginProvider.PROVIDER_ID);
  }

  signInWithMicrosoft(): void {
    this._authService.signIn(MicrosoftLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this._authService.signOut();
  }

  refreshGoogleToken(): void {
    this._authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
