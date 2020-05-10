import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {
  public activatedRoute: any;

  constructor(_activatedRoute: ActivatedRoute) {
    this.activatedRoute = _activatedRoute;
    this.activatedRoute.params.subscribe( (params: any) => {
      console.log(params.id);
    });
  }

}
