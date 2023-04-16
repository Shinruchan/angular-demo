import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './services/pokemon.model';

@Pipe({
  name: 'pokeImage',
})
export class PokeImagePipe implements PipeTransform {
  transform(value?: Pokemon) {
    if (!value) return '';

    return value.sprites?.front_default;
  }
}
