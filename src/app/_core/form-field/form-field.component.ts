import {AfterViewInit, Component, ContentChild, Input} from '@angular/core';
import {FormFieldRefDirective} from './form-field-ref.directive';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements AfterViewInit {

  @Input()
  smallLabel: boolean;
  focus: boolean;

  @ContentChild(FormFieldRefDirective)
  input: FormFieldRefDirective;

  constructor() {
    this.focus = false;
  }

  ngAfterViewInit(): void {
    this.input.focus.subscribe(data => {
      if (data) {
        this.focus = true;
      } else if (!data) {
        setTimeout(() => this.focus = false, 150);
      }
    });
  }

  click(): void {
    this.smallLabel = true;
    this.input.focusEle();
  }
}
