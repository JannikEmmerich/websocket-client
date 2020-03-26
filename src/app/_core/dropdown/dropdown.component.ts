import {AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList} from '@angular/core';
import {DropdownRefDirective} from './dropdown-ref.directive';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements AfterContentInit /*, OnChanges*/ {

  @Input() current: string;
  dropdown = false;
  @Output() private performeSelect = new EventEmitter<string>();

  @ContentChildren(DropdownRefDirective)
  private items!: QueryList<DropdownRefDirective>;

  ngAfterContentInit(): void {
    this.register();
  }

  private register(): void {
    this.items.forEach((item) => {
      item.click.subscribe((data) => {
        this.performeSelect.emit(data);
        this.current = data;
        this.dropdown = false;
      });
    });
  }

  // TODO: Handler onChange
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.register();
  //  }
}
