import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';
import { ContributionComponent } from "../contribution/contribution.component";

@Component({
  selector: 'app-my-plan',
  standalone: true,
  imports: [CommonModule,
    SideMenuComponent, ContributionComponent],
  templateUrl: './my-plan.component.html',
  styleUrls: ['./my-plan.component.less']
})
export class MyPlanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
