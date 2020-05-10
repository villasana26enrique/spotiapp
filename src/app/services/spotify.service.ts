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

  getHeaders() {
    return new HttpHeaders({
      Authorization: 'Bearer BQCG3p67E0dLONpYU76JRpQC8hRhNsZ7Oyec4jLc9m-ZNGR-ey0vhydGHHIyzR91_6Z1NjMv-4H5d36HjGY'
    });
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

  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

}
