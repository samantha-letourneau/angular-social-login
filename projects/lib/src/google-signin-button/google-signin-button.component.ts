import { Component, Input, ElementRef, OnInit } from "@angular/core";
import { first } from "rxjs";
import { GoogleSigninButtonOptions, gType, gShape, ButtonSize, gTheme, gLabel } from "../options";
import { SocialAuthService } from "../socialauth.service";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[google-signin-button]',
    template: ``
})
export class GoogleSigninButtonComponent implements OnInit {
    @Input() options!: GoogleSigninButtonOptions;

    constructor(
        private el: ElementRef,
        private socialAuthService: SocialAuthService) { }

    ngOnInit(): void {
        this.socialAuthService.initState
        .pipe(first())
        .subscribe(() => {
            if (!this.options)
                this.options = new GoogleSigninButtonOptions();

            if (!this.options?.Type)
                this.options.Type = gType.Standard;

            if (!this.options?.Width)
                this.options.Width = "239px";

            if (!this.options?.Shape)
                this.options.Shape = gShape.Rectangular;

            if (!this.options?.Size)
                this.options.Size = ButtonSize.Large;

            if (!this.options?.Theme)
                this.options.Theme = gTheme.FilledBlue;

            if (!this.options?.Label)
                this.options.Label = gLabel.SigninWith;

            google.accounts.id.renderButton(this.el.nativeElement, {
                type: this.options.Type,
                size: this.options.Size,
                theme: this.options.Theme,
                text: this.options.Label,
                shape: this.options.Shape,
                width: this.options.Width
            });
        });
    }
}