import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlaygroundEndpointParameterComponent} from './playground-endpoint-parameter.component';

describe('PlaygroundEndpointParameterComponent', () => {
  let component: PlaygroundEndpointParameterComponent;
  let fixture: ComponentFixture<PlaygroundEndpointParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaygroundEndpointParameterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundEndpointParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
