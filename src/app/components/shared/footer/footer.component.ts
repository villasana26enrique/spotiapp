import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {

  public year: number;

  constructor() {
    this.year = new Date().getFullYear();
  }

}
