import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconGitHubComponent} from './icon-github.component';

describe('IconGitHubComponent', () => {
  let component: IconGitHubComponent;
  let fixture: ComponentFixture<IconGitHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconGitHubComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconGitHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
