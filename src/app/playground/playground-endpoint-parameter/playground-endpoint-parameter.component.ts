import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Parameter} from '../interfaces/parameter';
import {FormControl} from '@angular/forms';
import {ParameterData} from '../interfaces/parameter-data';

@Component({
  selector: 'app-playground-endpoint-parameter',
  templateUrl: './playground-endpoint-parameter.component.html',
  styleUrls: ['./playground-endpoint-parameter.component.scss']
})
export class PlaygroundEndpointParameterComponent implements OnInit {

  @Input()
  parameter: Parameter;
  formControl: FormControl = new FormControl('');
  @Output()
  private parameterData: EventEmitter<ParameterData> = new EventEmitter<ParameterData>();

  constructor() {
    this.formControl.valueChanges.subscribe(value => this.parameterData.emit({
      value: this.parameter.type === 'boolean' ? value : (value ? value : null),
      valid: this.parameter.type === 'boolean' ? true : (this.parameter.optional ? true : Boolean(this.formControl.value))
    }));
  }

  ngOnInit(): void {
    this.parameterData.emit({
      value: null,
      valid: this.parameter.optional
    });
  }
}
