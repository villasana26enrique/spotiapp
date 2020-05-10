import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styles: []
})
export class CardInfoComponent {
  @Input() items: any[] = [];
  @Input() searchView: boolean;
  @Input() homeView: boolean;

  private router: any;

  constructor(_router: Router) {
    this.router = _router;
  }

  verArtista( item: any ) {
    let idArtist: string;
    idArtist = item.id;
    this.router.navigate([ '/artist', idArtist ]);
  }

}
