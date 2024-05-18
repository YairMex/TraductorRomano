import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanDisplayComponent } from './roman-display.component';

describe('RomanDisplayComponent', () => {
  let component: RomanDisplayComponent;
  let fixture: ComponentFixture<RomanDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomanDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
