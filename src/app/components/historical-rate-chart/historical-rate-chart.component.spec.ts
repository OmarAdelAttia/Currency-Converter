import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalRateChartComponent } from './historical-rate-chart.component';

describe('HistoricalRateChartComponent', () => {
  let component: HistoricalRateChartComponent;
  let fixture: ComponentFixture<HistoricalRateChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricalRateChartComponent]
    });
    fixture = TestBed.createComponent(HistoricalRateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
