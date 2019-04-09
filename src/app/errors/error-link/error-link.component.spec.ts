import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLinkComponent } from './error-link.component';

describe('ErrorLinkComponent', () => {
  let component: ErrorLinkComponent;
  let fixture: ComponentFixture<ErrorLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
