import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  private spotify: any;
  public resultado: any[] = [];
  public loading: boolean;
  constructor(_spotify: SpotifyService) {
    this.spotify = _spotify;
   }

  buscar(busqueda: string): void {
    this.loading = true;
    this.spotify.getArtists( busqueda )
                .subscribe( (data: any) => {
                  this.resultado = data;
                  this.loading = false;
                });
  }

}
