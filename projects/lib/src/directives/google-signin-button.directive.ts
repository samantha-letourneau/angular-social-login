import { Directive, ElementRef, Input } from '@angular/core';
import { take } from 'rxjs';
import { SocialAuthService } from '../socialauth.service';
import { GoogleSigninButtonOptions } from '../google-rendering-option';

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
      google.accounts.id.renderButton(el.nativeElement, {
        type: this.options.Type,
        size: this.options.Size,
        theme: this.options.Theme,
        text: this.options.Label,
        shape: this.options.Shape,
        width: this.options.Width.toString()
      });
    })
  }
}