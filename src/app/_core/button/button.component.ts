import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

    @Input() title: string;
    @Input() color: 'default' | 'green' | 'red' | 'yellow' = 'default';
    @Input() link: string;
    @Input() disabled: boolean;
    @Output() performClick: EventEmitter<void> = new EventEmitter<void>();
}
