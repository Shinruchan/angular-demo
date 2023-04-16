import { Component, Input, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';
import { Pokemon } from 'src/app/services/pokemon.model';

@Component({
  selector: 'poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css'],
})
export class PokeCardComponent implements OnInit {
  @Input() pokemonName!: string;
  pokemon?: Observable<Pokemon>;

  private pokemonApiService: PokemonApiService = inject(PokemonApiService);

  ngOnInit(): void {
    this.pokemon = this.pokemonApiService.getPokemonByName(this.pokemonName);
  }
}
