import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsBoardComponent } from './flights-board.component';

describe('FlightsBoardComponent', () => {
  let component: FlightsBoardComponent;
  let fixture: ComponentFixture<FlightsBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightsBoardComponent]
    });
    fixture = TestBed.createComponent(FlightsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
