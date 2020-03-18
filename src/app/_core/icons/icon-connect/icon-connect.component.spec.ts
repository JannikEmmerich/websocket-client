import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconConnectComponent} from './icon-connect.component';

describe('IconConnectComponent', () => {
  let component: IconConnectComponent;
  let fixture: ComponentFixture<IconConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconConnectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
