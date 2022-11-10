import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalItemsComponent } from './rental-items.component';

describe('RentalItemsComponent', () => {
  let component: RentalItemsComponent;
  let fixture: ComponentFixture<RentalItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
