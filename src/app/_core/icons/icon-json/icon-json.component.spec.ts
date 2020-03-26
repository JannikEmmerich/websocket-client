import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconJsonComponent} from './icon-json.component';

describe('IconJsonComponent', () => {
  let component: IconJsonComponent;
  let fixture: ComponentFixture<IconJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconJsonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
