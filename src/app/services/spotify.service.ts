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

  getNewReleases() {
    const headers = this.getHeaders();
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
                    .pipe( map( (data: any) => {
                      return data.albums.items;
                    }));
  }

  getArtists(busqueda: string, type: string = 'artist') {
    const headers = this.getHeaders();
    /* La función de Flecha del Map está abreviada, solo para demostrar otra manera de hacerlo */
    return this.http.get(`https://api.spotify.com/v1/search?q=${ busqueda }&type=${ type }&limit=20`, { headers })
                    .pipe( map( (data: any) => data.artists.items ));
  }

  getHeaders() {
    return new HttpHeaders({
      Authorization: 'Bearer BQDt2AwzALJo_zTIqh4kdtnGbX9Dc2I6kkRz-KPJ9h6GRo8YVPAGAW-p7N8oUWimU6AWtyyQxwifQk_FAhc'
    });
  }
}
