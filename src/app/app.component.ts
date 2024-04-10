import { Component } from '@angular/core';
import { HospitalTotalService } from './hospital/hospital-total.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Counting Individuals Project';
  totalCount = 0;
  // we put our value inside the constructor so it's ready when the page is rendered
  constructor(private totalCounterService: HospitalTotalService) {
    this.totalCount = totalCounterService.countTotal();
  }
}
