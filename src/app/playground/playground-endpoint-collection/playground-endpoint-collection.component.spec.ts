import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlaygroundEndpointCollectionComponent} from './playground-endpoint-collection.component';

describe('PlaygroundEndpointCollectionComponent', () => {
  let component: PlaygroundEndpointCollectionComponent;
  let fixture: ComponentFixture<PlaygroundEndpointCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaygroundEndpointCollectionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundEndpointCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
