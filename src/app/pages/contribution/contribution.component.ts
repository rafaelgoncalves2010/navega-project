import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contribution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.less']
})
export class ContributionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
