import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRightNavComponent } from './show-right-nav.component';

describe('ShowRightNavComponent', () => {
  let component: ShowRightNavComponent;
  let fixture: ComponentFixture<ShowRightNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRightNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRightNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
