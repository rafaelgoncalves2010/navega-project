import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-next',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.less']
})
export class NextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
