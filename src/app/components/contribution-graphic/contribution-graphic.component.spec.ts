import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionGraphicComponent } from './contribution-graphic.component';

describe('ContributionGraphicComponent', () => {
  let component: ContributionGraphicComponent;
  let fixture: ComponentFixture<ContributionGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ContributionGraphicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributionGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
