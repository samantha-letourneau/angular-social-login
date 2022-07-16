import { Directive, ElementRef, Input} from '@angular/core';
import { take } from 'rxjs';
import { SocialAuthService } from '../socialauth.service';
import { Type, Shape, Theme, Label, Size } from '../google-rendering-option';

@Directive({
  selector: 'google-signin-button',
})
export class GoogleSigninButtonDirective {
  @Input(Type) type!: Type;
  @Input(Shape) shape?: Shape;
  @Input(Theme) theme?: Theme;
  @Input(Label) label: Label;
  @Input(Size) size: Size;
  @Input('width') width: number;
  constructor(
    el: ElementRef,
    socialAuthService: SocialAuthService
  ) {
    
    socialAuthService.initState.pipe(take(1)).subscribe(() => {
      google.accounts.id.renderButton(el.nativeElement, {
        type: this.type === 1 ? 'standard' : 'icon',
        size: this.size === 1 ? 'small' : this.size === 2 ? 'medium' : 'large',
        theme: this.theme === 1 ? 'outline' : this.theme === 2 ? 'filled_blue' : 'filled_black',
        label: this.label === 1 ? 'signin_with' : this.label === 2 ? 'signin_with' : this.label === 3 ? 'continue_with' : 'sign_in',
        shape: this.shape === 1 ? 'rectangular' : this.shape === 2 ? 'pill' : this.shape === 3 ? 'square' : 'circle',
        width: this.width
      });
    })
  }
}
