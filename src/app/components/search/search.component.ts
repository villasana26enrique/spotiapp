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
  constructor(_spotify: SpotifyService) {
    this.spotify = _spotify;
   }

  buscar(busqueda: string): void {
    console.log(busqueda);
    this.spotify.getArtists( busqueda )
                .subscribe( (data: any) => {
                  console.log(data);
                  this.resultado = data.artists.items;
                });
  }

}
