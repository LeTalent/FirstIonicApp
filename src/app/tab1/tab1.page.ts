import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  name: string;
  title = 'Maurice';


  constructor( public router: Router ) {}
  openNextTab() {
    this.router.navigate(['tabs/tab2', { name: this.name }]);
  }

}
