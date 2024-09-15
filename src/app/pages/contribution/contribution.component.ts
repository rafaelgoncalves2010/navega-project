import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IContributionType } from 'src/app/model/IContributionType.interface';
import { ContributionTypeComponent } from 'src/app/components/contribution-type/contribution-type.component';

@Component({
  selector: 'app-contribution',
  standalone: true,
  imports: [CommonModule, ContributionTypeComponent],
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.less']
})
export class ContributionComponent implements OnInit {
  contributionList !: IContributionType[];
  constructor() { }

  ngOnInit(): void {
    this.contributionList = this.contributionData();
  }

  contributionData(): Array<IContributionType>{
    return [
      {
        name:'Contribuição mensal',
        contributionList: [
          {
            description: 'Valor da contribuição',
            value: 500
          },
          {
            description: 'Porcentagem do salário',
            porcentege: '5%'
          }
        ]
      },
      {
        name:'Contribuição voluntária',
        contributionList: [
          {
            description: 'Valor da contribuição',
            value: 500
          },
        ]
      }
    ]
  }

  trackByFn(index: number, item: any): number {
    return item.id; 
  }
}
