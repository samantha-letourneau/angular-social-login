import { Component, Input, OnInit } from '@angular/core';
import { MicrosoftSigninButtonOptions, msShape } from '../options';
@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[microsoft-signin-button]',
    template: `<div id="msSvgContainer" 
    [style.width]="this.options.Width"
    [class.msPill] = "this.options.Shape === msShape.Pill">
                <div id="msSvgInner">
                <div style="overflow: hidden;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><title>MS-SymbolLockup</title><rect x="1" y="1" width="9" height="9" fill="#f25022"/><rect x="1" y="11" width="9" height="9" fill="#00a4ef"/><rect x="11" y="1" width="9" height="9" fill="#7fba00"/><rect x="11" y="11" width="9" height="9" fill="#ffb900"/></svg>
                    <span id="msSvgLabel">{{this.options.Label}}</span>
                </div></div></div>`,
    styleUrls: ['./microsoft-signin-button.component.css'],
})
export class MicrosoftSigninButtonComponent implements OnInit {
    @Input() options!: MicrosoftSigninButtonOptions;
    msShape = msShape;
    constructor() { }

    ngOnInit(): void {
        if (!this.options)
            this.options = new MicrosoftSigninButtonOptions();

        if (!this.options?.Label)
            this.options.Label = "Sign in with Microsoft";

        if (!this.options?.Width)
            this.options.Width = "241px";

        if (!this.options?.Shape)
            this.options.Shape = msShape.Rectangular;
    }
}
