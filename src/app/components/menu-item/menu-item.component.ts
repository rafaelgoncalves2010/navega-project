import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMenuItem } from 'src/app/model/IMenuItem.interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.less']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem!: IMenuItem;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  currentRoute(): boolean {
    return this.router.url.includes('/contribution');
  }

}
