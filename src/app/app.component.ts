
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'rep-chartjs';
  tabNumber = 2;

  constructor(private router: Router) { }

  changeTabNumber(tabNumber: number) {
    this.tabNumber = tabNumber;
    console.log("tabnumber", this.tabNumber);

    switch (this.tabNumber) {
      case 1:
        this.router.navigate(['/presenter']);
        break;
      case 2:
        this.router.navigate(['/dashboard']);
        break;
      case 3:
        this.router.navigate(['/solarmap']);
        break;
      default:
        break;
    }
  }
}
