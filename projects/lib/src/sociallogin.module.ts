import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialAuthService, SocialAuthServiceConfig } from './socialauth.service';
import { GoogleSigninButtonDirective } from './directives/google-signin-button.directive';
import { FacebookSigninButtonDirective } from './directives/facebook-signin-button.directive';
import { MicrosoftSigninButtonComponent } from './microsoft-signin-button/microsoft-signin-button.component';

/**
 * The main module of ng-social-login library.
 */
@NgModule({
  declarations: [MicrosoftSigninButtonComponent, GoogleSigninButtonDirective, FacebookSigninButtonDirective],
  imports: [
    CommonModule,
  ],
  providers: [
    SocialAuthService
  ],
  exports: [MicrosoftSigninButtonComponent, GoogleSigninButtonDirective, FacebookSigninButtonDirective]
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
