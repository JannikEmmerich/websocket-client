import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconRawComponent} from './icon-raw.component';

describe('IconRawComponent', () => {
  let component: IconRawComponent;
  let fixture: ComponentFixture<IconRawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconRawComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
