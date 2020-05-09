import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
              .subscribe((data: any) => {
                console.log(data);
              });
  }

  getHeaders() {
    return new HttpHeaders({
      Authorization: 'Bearer BQDQl8r6qw-uLxyZyazkLlwKrr4OZP1sPQ7R9GTps9Z0Z8CyUORmRhEWv7y9-e12jospbPBs3R7QQB_o2kE'
    });
  }
}
