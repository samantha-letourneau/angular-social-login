import { BaseLoginProvider } from '../entities/base-login-provider';
import { SocialUser } from '../entities/social-user';
import * as CryptoJS from 'crypto-js';

declare let FB: any;

export class FacebookLoginProvider extends BaseLoginProvider {
  public static readonly PROVIDER_ID: string = 'FACEBOOK';

  private requestOptions = {
    scope: 'email,public_profile',
    locale: 'en_US',
    fields: 'name,email,picture,first_name,last_name,gender,birthday',
    version: 'v14.0',
  };

  constructor(private clientId: string, initOptions: Object = {}) {
    super();

    this.requestOptions = {
      ...this.requestOptions,
      ...initOptions,
    };
  }

  initialize(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.loadScript(
          FacebookLoginProvider.PROVIDER_ID,
          `//connect.facebook.net/${this.requestOptions.locale}/sdk.js`,
          () => {
            FB.init({
              appId: this.clientId,
              autoLogAppEvents: true,
              cookie: false,
              xfbml: true,
              version: this.requestOptions.version,
            });

            resolve();
          }
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  getLoginStatus(): Promise<SocialUser> {
    return new Promise((resolve, reject) => {
      FB.getLoginStatus(async (response: any) => {
        if (response.status === 'connected') {
          let authResponse = response.authResponse;
          FB.api(`/me?fields=${this.requestOptions.fields}`, (fbUser: any) => {
            let user: SocialUser = new SocialUser();

            user.id = fbUser.id;
            user.name = fbUser.name;
            user.email = fbUser.email;
            user.photoUrl = `https://graph.facebook.com/${fbUser.id}/picture?type=normal&access_token=${authResponse.accessToken}`;
            user.firstName = fbUser.first_name;
            user.lastName = fbUser.last_name;
            user.birthday = fbUser.birthday;
            user.gender = fbUser.gender;
            user.accessToken = this.jwtSignedToken(this.clientId, fbUser, authResponse.accessToken);
            user.response = fbUser;

            resolve(user);
          });
        } else {
          reject(
            `No user is currently logged in with ${FacebookLoginProvider.PROVIDER_ID}`
          );
        }
      });
    });
  }

  signIn(signInOptions?: any): Promise<SocialUser> {
    const options = { ...this.requestOptions, ...signInOptions };
    return new Promise((resolve, reject) => {
      FB.login(async (response: any) => {
        if (response.authResponse) {
          let authResponse = response.authResponse;
          
          FB.api(`/me?fields=${options.fields}`, (fbUser: any) => {
            let user: SocialUser = new SocialUser();
            user.id = fbUser.id;
            user.name = fbUser.name;
            user.email = fbUser.email;
            user.photoUrl = `https://graph.facebook.com/${fbUser.id}/picture?type=normal`;
            user.firstName = fbUser.first_name;
            user.birthday = fbUser.birthday;
            user.gender = fbUser.gender;
            user.lastName = fbUser.last_name;
            user.accessToken = this.jwtSignedToken(this.clientId, fbUser, authResponse.accessToken);
            user.response = fbUser;

            resolve(user);
          });
        } else {
          reject('User cancelled login or did not fully authorize.');
        }
      }, options);
    });
  }

  signOut(): Promise<void> {
    return new Promise((resolve, reject) => {
      FB.logout((response: any) => {
        resolve();
      });
    });
  }
  /** Facebook do not send a JWT token so I build it. Source: https://www.jonathan-petitcolas.com/2014/11/27/creating-json-web-token-in-javascript.html */
  private jwtSignedToken(clientId: string, fbUser: any, accessToken: string): string {
    const header = `{
      "alg": "HS256",
      "typ": "JWT"
    }`;

    const stringifiedHeader = CryptoJS.enc.Utf8.parse(header);
    const encodedHeader = this.base64url(stringifiedHeader);

    const stringifiedData = CryptoJS.enc.Utf8.parse(this.getPayload(fbUser, accessToken));
    const encodedData = this.base64url(stringifiedData);

    const token = encodedHeader + "." + encodedData;
    return token + "." + this.base64url(CryptoJS.HmacSHA256(token, clientId));
  }
  /** The payload I want to get with the JWT token. */
  private getPayload(fbUser: any, accessToken: string): string {
    return `{"iss": "https://graph.facebook.com",
    "aud": "${this.clientId}",
    "sub": "${fbUser.id}",
    "email": "${fbUser.email}",
    "azp": "${this.clientId}",
    "name": "${fbUser.first_name} ${fbUser.last_name}",
    "picture": "https://graph.facebook.com/${fbUser.id}/picture?type=normal",
    "given_name": "${fbUser.first_name}",
    "family_name": "${fbUser.last_name}",
    "birthdate": "${fbUser.user_birthday}",
    "gender": "${fbUser.user_gender}",
    "iat": ${Math.floor((new Date()).getTime() / 1000)},
    "exp": ${Math.floor(((new Date()).getTime() + 86400000) / 1000)},
    "jti": "${accessToken}"}`;
  }
  /** Encode in classical base64 */
  private base64url(source) {
    return CryptoJS.enc.Base64.stringify(source)
      .replace(/=+$/, '') // Remove padding equal characters
      .replace(/\+/g, '-') // Replace characters according to base64url specifications
      .replace(/\//g, '_');
  }
}