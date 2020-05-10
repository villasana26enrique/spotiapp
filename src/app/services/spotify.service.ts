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
      Authorization: 'Bearer BQBALfCFVTXCOHeHKjUXubkgUHNCgrlBm_nPpc4QU_d-0itMdEePBH7uJDURmFzoi0C_-6QAqnR7S34Ni2U'
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
