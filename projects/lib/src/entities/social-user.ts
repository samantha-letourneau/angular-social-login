export class SocialUser {
  provider: string;
  id: string;
  email: string;
  name: string;
  photoUrl: string;
  firstName: string;
  gender: string;
  birthday: string;
  lastName: string;
  accessToken: string;
  idToken: string; // Reference https://developers.google.com/identity/sign-in/web/backend-auth
  authorizationCode: string; // Reference https://developers.google.com/identity/sign-in/web/reference#googleauthgrantofflineaccessoptions
  response: any;
}
