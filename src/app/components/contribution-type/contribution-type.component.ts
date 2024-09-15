import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IContributionType } from 'src/app/model/IContributionType.interface';

@Component({
  selector: 'app-contribution-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contribution-type.component.html',
  styleUrls: ['./contribution-type.component.less']
})
export class ContributionTypeComponent implements OnInit {
  @Input() contribution !: IContributionType;

  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(index: number, item: any): number {
    return item.id; 
  }
}
