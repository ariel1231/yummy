import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';
import { isProceduralRenderer } from '@angular/core/src/render3/interfaces/renderer';

@Directive({
  selector: '[appDropdown]'
})
export class DropDownDirective {


  @HostBinding('class.open') isOpen = false;

  // constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  // }

  @HostListener('click') toggleDropdown() {
    this.isOpen = !this.isOpen;
  }




  // @HostListener('click') toggleDropdown() {
  //   if (this.isOpen) {
  //     this.renderer.removeClass(this.elementRef.nativeElement, 'open');
  //     this.isOpen = false;
  //   } else {
  //     this.renderer.addClass(this.elementRef.nativeElement, 'open');
  //     this.isOpen = true;
  //   }
  // }







}
