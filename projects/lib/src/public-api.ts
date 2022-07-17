export {
  SocialAuthService,
  SocialAuthServiceConfig,
} from './socialauth.service';
export { SocialLoginModule } from './sociallogin.module';
export { SocialUser } from './entities/social-user';
export { LoginProvider } from './entities/login-provider';
export { BaseLoginProvider } from './entities/base-login-provider';
export { DummyLoginProvider } from './providers/dummy-login-provider';
export {
  GoogleInitOptions,
  GoogleLoginProvider,
} from './providers/google-login-provider';
export { FacebookLoginProvider } from './providers/facebook-login-provider';
export { AmazonLoginProvider } from './providers/amazon-login-provider';
export { VKLoginProvider } from './providers/vk-login-provider';
export { MicrosoftLoginProvider } from './providers/microsoft-login-provider';
export * from './options';
export { GoogleSigninButtonDirective } from './directives/google-signin-button.directive';
export { FacebookSigninButtonDirective } from './directives/facebook-signin-button.directive';
export { MicrosoftSigninButtonDirective } from './directives/microsoft-signin-button.directive';

