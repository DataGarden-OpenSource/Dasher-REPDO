
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

  constructor(private router: Router) {
    if (localStorage.getItem('tabnumber')) {
      this.tabNumber = Number(localStorage.getItem('tabnumber'));
    }
  }

  changeTabNumber(tabNumber: number) {
    this.tabNumber = tabNumber;

    if (this.tabNumber > 3) {
      this.tabNumber = 1;
    }

    if (this.tabNumber < 1){
      this.tabNumber = 3;
    }

    console.log("tabnumber", this.tabNumber);
    localStorage.setItem('tabnumber', this.tabNumber.toString());

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
