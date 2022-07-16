import { Directive, ElementRef, Input} from '@angular/core';
import { take } from 'rxjs';
import { SocialAuthService } from '../socialauth.service';
import { Type, Shape, Theme, Label, Size } from '../google-rendering-option';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[google-signin-button]'
})
export class GoogleSigninButtonDirective {
  @Input() type!: Type;
  @Input() shape?: Shape;
  @Input() theme?: Theme;
  @Input() label: Label;
  @Input() size: Size;
  @Input() width: string;
  constructor(
    el: ElementRef,
    socialAuthService: SocialAuthService
  ) {
    
    socialAuthService.initState.pipe(take(1)).subscribe(() => {
      google.accounts.id.renderButton(el.nativeElement, {
        type: this.type,
        size: this.size,
        theme: this.theme,
        text: this.label,
        shape: this.shape,
        width: this.width
      });
    })
  }
}
