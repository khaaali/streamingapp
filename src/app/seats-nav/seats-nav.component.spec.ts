import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsNavComponent } from './seats-nav.component';

describe('SeatsNavComponent', () => {
  let component: SeatsNavComponent;
  let fixture: ComponentFixture<SeatsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
