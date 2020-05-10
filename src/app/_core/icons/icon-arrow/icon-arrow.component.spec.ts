import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconArrowComponent} from './icon-arrow.component';

describe('IconArrowComponent', () => {
  let component: IconArrowComponent;
  let fixture: ComponentFixture<IconArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconArrowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
