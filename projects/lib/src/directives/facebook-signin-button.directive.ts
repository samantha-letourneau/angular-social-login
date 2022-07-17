import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ButtonSize, FacebookSigninButtonOptions, fbLabel, fbLayout } from '../options';

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
    if (!this.options?.Label)
      this.options.Label = fbLabel.LoginWith;

    if (!this.options?.Layout)
      this.options.Layout = fbLayout.Default;

    if (!this.options?.Width)
      this.options.Width = "150px";

    if (!this.options?.Size)
      this.options.Size = ButtonSize.Large;

    if (!this.options?.ActivateLogout)
      this.options.ActivateLogout = false;

    if (!this.options?.IncludeProfileNameIfAny)
      this.options.IncludeProfileNameIfAny = false;

    this.render.addClass(this.el.nativeElement, 'fb-login-button');
    this.render.setAttribute(this.el.nativeElement, 'data-width', this.options.Width);
    this.render.setAttribute(this.el.nativeElement, 'data-size', this.options.Size);
    this.render.setAttribute(this.el.nativeElement, 'data-button-type', this.options.Label);
    this.render.setAttribute(this.el.nativeElement, 'data-layout', this.options.Layout);
    this.render.setAttribute(this.el.nativeElement, 'data-auto-logout-link', this.options.ActivateLogout.toString());
    this.render.setAttribute(this.el.nativeElement, 'data-use-continue-as', this.options.IncludeProfileNameIfAny.toString());
  }
}