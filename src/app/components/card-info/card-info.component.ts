import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styles: []
})
export class CardInfoComponent {
  @Input() items: any[] = [];
  @Input() searchView: boolean;
  @Input() homeView: boolean;

  constructor() { }

}
