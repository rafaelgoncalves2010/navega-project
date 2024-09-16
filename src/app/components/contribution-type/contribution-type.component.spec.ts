import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContributionTypeComponent } from './contribution-type.component';
import { IContributionType } from 'src/app/model/IContributionType.interface';

describe('ContributionTypeComponent', () => {
  let component: ContributionTypeComponent;
  let fixture: ComponentFixture<ContributionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributionTypeComponent], 
    }).compileComponents();

    fixture = TestBed.createComponent(ContributionTypeComponent);
    component = fixture.componentInstance;

    const mockContribution: IContributionType = {
      name: 'Test Contribution Type',
      contributionList: []
    };

    component.contribution = mockContribution; 
    fixture.detectChanges();  
  });

  it('deveria criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deveria mostrar o nome da contribuicao', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test Contribution Type');  
  });
});
