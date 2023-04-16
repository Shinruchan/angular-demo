import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';
import { Pokemon } from 'src/app/services/pokemon.model';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.css'],
})
export class PokeSearchComponent {
  query: string = '';
  pokemon?: Observable<Pokemon>;

  private pokemonApiService: PokemonApiService = inject(PokemonApiService);

  findPokemonByName() {
    this.pokemon = this.pokemonApiService.getPokemonByName(this.query);
  }
}
