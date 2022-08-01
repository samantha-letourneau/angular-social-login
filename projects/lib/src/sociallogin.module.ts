import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialAuthService, SocialAuthServiceConfig } from './socialauth.service';
import { SocialSigninButtonComponent } from './social-signin-button/social-signin-button.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleSigninButtonComponent } from './google-signin-button/google-signin-button.component';

/**
 * The main module of ng-social-login library.
 */
@NgModule({
  declarations: [SocialSigninButtonComponent, GoogleSigninButtonComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SocialAuthService
  ],
  exports: [SocialSigninButtonComponent, GoogleSigninButtonComponent]
})
export class SocialLoginModule {
  public static initialize(config: SocialAuthServiceConfig): ModuleWithProviders<SocialLoginModule> {
    return {
      ngModule: SocialLoginModule,
      providers: [
        SocialAuthService,
        {
          provide: 'SocialAuthServiceConfig',
          useValue: config
        }
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: SocialLoginModule) {
    if (parentModule) {
      throw new Error(
        'SocialLoginModule is already loaded. Import it in the AppModule only');
    }
  }
}
