import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificHotelDataComponent } from './specific-hotel-data.component';

describe('SpecificHotelDataComponent', () => {
  let component: SpecificHotelDataComponent;
  let fixture: ComponentFixture<SpecificHotelDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificHotelDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificHotelDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
