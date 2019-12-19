import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiNavComponent } from './wifi-nav.component';

describe('WifiNavComponent', () => {
  let component: WifiNavComponent;
  let fixture: ComponentFixture<WifiNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifiNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
