import {Directive, ElementRef, EventEmitter, HostListener} from '@angular/core';

@Directive({
  selector: '[appFormFieldRef]'
})
export class FormFieldRefDirective {

  focus: EventEmitter<boolean> = new EventEmitter<boolean>();
  update: EventEmitter<string> = new EventEmitter<string>();
  empty = false;

  private readonly native: any;

  constructor(el: ElementRef) {
    this.native = el.nativeElement;
    setTimeout(() => this.onValueChange(this.native.value), 1);
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(data: any): void {
    this.focus.emit(true);
    this.onValueChange(data);
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(data: any): void {
    this.focus.emit(false);
    this.onValueChange(data);
  }

  public focusEle(): void {
    this.native.focus();
  }

  // Not Used
  // public setValue(value: string): void {
  //   this.native.value = value;
  //   this.onValueChange(value);
  // }

  private onValueChange(data: string): void {
    this.empty = !data;
    this.update.emit(data);
  }
}
