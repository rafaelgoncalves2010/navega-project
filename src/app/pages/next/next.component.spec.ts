import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextComponent } from './next.component';

describe('NextComponent', () => {
  let component: NextComponent;
  let fixture: ComponentFixture<NextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
