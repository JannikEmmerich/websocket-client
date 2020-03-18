import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconSendComponent} from './icon-send.component';

describe('IconSendComponent', () => {
  let component: IconSendComponent;
  let fixture: ComponentFixture<IconSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconSendComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
