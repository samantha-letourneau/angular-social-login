import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { FacebookSigninButtonOptions } from '../options';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[facebook-signin-button]'
})
export class FacebookSigninButtonDirective implements OnInit {
  @Input() options!: FacebookSigninButtonOptions;
  
  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
     this.render.addClass(this.el.nativeElement, 'fb-login-button');
     this.render.setAttribute(this.el.nativeElement, 'data-width', this.options.Width.toString());
     this.render.setAttribute(this.el.nativeElement, 'data-size', this.options.Size);
     this.render.setAttribute(this.el.nativeElement, 'data-button-type', this.options.Label);
     this.render.setAttribute(this.el.nativeElement, 'data-layout', this.options.Layout);
     this.render.setAttribute(this.el.nativeElement, 'data-auto-logout-link', this.options.ActivateLogout.toString());
     this.render.setAttribute(this.el.nativeElement, 'data-use-continue-as', this.options.IncludeProfileNameIfAny.toString());
  }
}