import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IContributionType } from 'src/app/model/IContributionType.interface';
import { ContributionTypeComponent } from 'src/app/components/contribution-type/contribution-type.component';
import { ContributionGraphicComponent } from 'src/app/components/contribution-graphic/contribution-graphic.component';

@Component({
  selector: 'app-contribution',
  standalone: true,
  imports: [CommonModule, ContributionTypeComponent, ContributionGraphicComponent],
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

  getLabelData(): Array<string>{
    return this.contributionList.map( item => item?.name);
  }

  getValuesData(): Array<number>{
    return this.contributionList.flatMap(contribution =>
      contribution.contributionList
        .map(item => item.value) 
        .filter((value): value is number => value !== undefined && value !== null) 
    );
  }

  trackByFn(index: number, item: any): number {
    return item.id; 
  }
}
