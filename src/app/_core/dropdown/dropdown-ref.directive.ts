import {Directive, EventEmitter, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdownRef]'
})
export class DropdownRefDirective {

  public click = new EventEmitter<string>();

  @HostListener('click', ['$event.target.innerHTML'])
  onClick(data: string): void {
    this.click.emit(data);
  }
}
