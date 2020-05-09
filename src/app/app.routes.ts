import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';


const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
