import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';
import { Pokemon } from 'src/app/services/pokemon.model';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css'],
})
export class PokeListComponent implements OnInit {
  pokemonList?: Observable<Pokemon[]>;

  constructor(private pokemonApiService: PokemonApiService) {}

  ngOnInit(): void {
    this.pokemonList = this.pokemonApiService.getPokemonList();
  }
}
