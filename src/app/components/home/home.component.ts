import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  private spotify: any;
  loading: boolean;
  public nuevosLanzamientos: any[] = [];

  constructor(_spotify: SpotifyService) {

    this.spotify = _spotify;
    this.loading = true;
    this.spotify.getNewReleases()
        .subscribe((data: any) => {
          console.log(data);
          this.nuevosLanzamientos = data;
          this.loading = false;
    });

  }

}
