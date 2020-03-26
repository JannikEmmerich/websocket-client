import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input() items: [string];
  @Input() current: string;
  dropdown = false;
  @Output() private select = new EventEmitter<string>();

  selectItem(item: string) {
    this.select.emit(item);
    this.current = item;
    this.dropdown = false;
  }
}
