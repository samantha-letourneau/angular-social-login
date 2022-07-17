import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { MicrosoftSigninButtonOptions } from '../options';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[microsoft-signin-button]'
})
export class MicrosoftSigninButtonDirective implements OnInit {
  @Input() options!: MicrosoftSigninButtonOptions;
  
  constructor(
    private el: ElementRef) { 
    
  }

  ngOnInit(): void {
     this.el.nativeElement.innerHTML = this.options.ButtonImage;
  }
}