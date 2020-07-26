import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonStopImgComponent } from './non-stop-img.component';

describe('NonStopImgComponent', () => {
  let component: NonStopImgComponent;
  let fixture: ComponentFixture<NonStopImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonStopImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonStopImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
