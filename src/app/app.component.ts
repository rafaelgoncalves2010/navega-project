import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MyPlanComponent } from "./pages/my-plan/my-plan.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  imports: [RouterModule]
})
export class AppComponent {
  title = 'navega-project';
}
