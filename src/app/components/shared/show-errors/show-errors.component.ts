import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html'
})
export class ShowErrorsComponent {

  @Input() mensaje: string;

  constructor() { }

}
