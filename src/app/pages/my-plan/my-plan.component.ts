import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';
import { ContributionComponent } from "../contribution/contribution.component";
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-my-plan',
  standalone: true,
  imports: [CommonModule, HeaderComponent,
    SideMenuComponent, RouterModule],
  templateUrl: './my-plan.component.html',
  styleUrls: ['./my-plan.component.less']
})
export class MyPlanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
