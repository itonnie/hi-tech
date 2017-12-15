import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public router: Router) {

  }

  schedule(id, sub, name) {
    var category;
    switch(id) {
      case 1:
        category = "Residential Services";
        break;
      case 2:
        category = "Commercial Services";
        break;
      case 3:
        category = "House Repairs";
        break;
      case 4:
        category = "Office Repairs";
        break;
      default:
        category = "None Picked";
        break;
    }

    this.router.navigate(['/schedule'], {
      queryParams: {
        category: category,
        sub: sub,
        name: name
      }
    });

  }
}
