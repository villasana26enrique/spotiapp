import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {
  public activatedRoute: any;
  public spotify: any;
  public artista: any = {};
  public loading: boolean;
  public topTracks: any[] = [];
  public  error: boolean;
  public mensajeError: string;
  constructor(_activatedRoute: ActivatedRoute,
              _spotify: SpotifyService) {
    this.loading = true;
    this.spotify = _spotify;
    this.activatedRoute = _activatedRoute;
    this.error = false;
    this.activatedRoute.params.subscribe( (params: any) => {
      this.getArtist( params.id );
      this.getTopTracks( params.id );
    });
  }

  getArtist(id: string) {
    this.loading = true;
    this.spotify.getArtist( id )
        .subscribe( (data: any) => {
          this.artista = data;
          this.loading = false;
        }, ( reject ) => {
          this.loading = false;
          this.mensajeError = reject.error.error.message;
          this.error = true;
        });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks( id ).subscribe(
      (data: any) => {
        console.log(data);
        this.topTracks = data;
      }, ( reject: any ) => {
          this.loading = false;
          this.mensajeError = reject.error.error.message;
          this.error = true;
      }
    );
  }

}
