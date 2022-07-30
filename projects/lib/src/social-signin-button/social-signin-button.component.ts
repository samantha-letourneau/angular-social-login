import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { SocialSigninButtonOptions, Provider, Shape } from '../options';
import { FacebookLoginProvider } from '../providers/facebook-login-provider';
import { MicrosoftLoginProvider } from '../providers/microsoft-login-provider';
import { SocialAuthService } from '../socialauth.service';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[social-signin-button]',
    template: `<div id="svgContainer" (click)="signIn(this.options.Provider, this.options.ManageClickEvent, this.options.signInOptions)"
    [style.width]="this.options.Width"
    [class.pill] = "this.options.Shape === shape.Pill">
                <div id="svgInner">
                <div style="overflow: hidden;">
                <ng-container [ngSwitch]="this.options.Provider">
                    <svg *ngSwitchCase="this.provider.Facebook" fill="#228BE6" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px">    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/></svg>
                    <svg *ngSwitchCase="this.provider.Microsoft" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><title>MS-SymbolLockup</title><rect x="1" y="1" width="9" height="9" fill="#f25022"/><rect x="1" y="11" width="9" height="9" fill="#00a4ef"/><rect x="11" y="1" width="9" height="9" fill="#7fba00"/><rect x="11" y="11" width="9" height="9" fill="#ffb900"/></svg>
                </ng-container>
                <span id="svgLabel">{{this.options.Label}}</span></div></div></div>`,
    styleUrls: ['./social-signin-button.component.css']
})
export class SocialSigninButtonComponent implements OnInit {
    @Input() options!: SocialSigninButtonOptions;
    shape = Shape;
    provider = Provider;
    constructor(private readonly authService: SocialAuthService, private httpClient: HttpClient) { }

    ngOnInit(): void {
        if (!this.options)
            this.options = new SocialSigninButtonOptions();

        if (!this.options?.Label)
            this.options.Label = "Sign in";

        if (!this.options?.Width)
            this.options.Width = "241px";

        if (!this.options?.Shape)
            this.options.Shape = Shape.Rectangular;

        if (!this.options?.ManageClickEvent)
            this.options.ManageClickEvent = false;
    }

    signIn(provider: Provider, manageClickEvent: boolean, signInOptions: object) {
        if (!manageClickEvent) {
            if (provider == this.provider.Facebook) {
                this.authService.signIn(FacebookLoginProvider.PROVIDER_ID, signInOptions);
            }
            else {
                this.authService.signIn(MicrosoftLoginProvider.PROVIDER_ID, signInOptions);
            }
        }
    }
}
