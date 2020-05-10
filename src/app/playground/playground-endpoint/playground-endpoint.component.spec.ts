import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlaygroundEndpointComponent} from './playground-endpoint.component';

describe('PlaygroundEndpointComponent', () => {
  let component: PlaygroundEndpointComponent;
  let fixture: ComponentFixture<PlaygroundEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaygroundEndpointComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
