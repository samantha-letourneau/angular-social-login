import { Directive, ElementRef, Input } from '@angular/core';
import { take } from 'rxjs';
import { SocialAuthService } from '../socialauth.service';
import { ButtonSize, gLabel, GoogleSigninButtonOptions, gShape, gTheme, gType } from '../options';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[google-signin-button]'
})
export class GoogleSigninButtonDirective {
  @Input() options!: GoogleSigninButtonOptions;

  constructor(
    el: ElementRef,
    socialAuthService: SocialAuthService
  ) {
    socialAuthService.initState.pipe(take(1)).subscribe(() => {
      if(!this.options)
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

      google.accounts.id.renderButton(el.nativeElement, {
        type: this.options.Type,
        size: this.options.Size,
        theme: this.options.Theme,
        text: this.options.Label,
        shape: this.options.Shape,
        width: this.options.Width
      });
    })
  }
}