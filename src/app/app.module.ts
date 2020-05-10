import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardInfoComponent } from './components/card-info/card-info.component';

// Para poder Hacer llamados a API's se debe importar:
import { HttpClientModule } from '@angular/common/http';


// Rutas
import { AppRoutingModule } from './app.routes';

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    CardInfoComponent,
    LoadingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
