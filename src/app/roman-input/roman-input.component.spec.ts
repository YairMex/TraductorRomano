import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanInputComponent } from './roman-input.component';

describe('RomanInputComponent', () => {
  let component: RomanInputComponent;
  let fixture: ComponentFixture<RomanInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomanInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
