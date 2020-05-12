import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private _domSanitizer: DomSanitizer) {}

  transform(value: string): SafeResourceUrl {
    const url = 'https://open.spotify.com/embed?uri=';
    return this._domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }
 
}
