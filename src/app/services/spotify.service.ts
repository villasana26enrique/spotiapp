import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private http: any;

  constructor(_http: HttpClient) {
    console.log('API Spotify Lista');
    this.http = _http;
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = this.getHeaders();
    return this.http.get( url, { headers } );
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
              .pipe( map( (data: any) => {
                return data.albums.items;
              }));
  }

  getArtists(busqueda: string, type: string = 'artist') {
    /* La función de Flecha del Map está abreviada, solo para demostrar otra manera de hacerlo */
    return this.getQuery(`search?q=${ busqueda }&type=${ type }&limit=20`)
              .pipe( map( (data: any) => data.artists.items ));
  }

  getHeaders() {
    return new HttpHeaders({
      Authorization: 'Bearer BQD6yrw2a_UtCUz8geWosIwHgz0qvP-2s-RqFMVKeGaYBwabZhX9XM929R3ZXnwCuTdvZovXvEurKSDceVk'
    });
  }

}
