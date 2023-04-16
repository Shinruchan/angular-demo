import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';
import { Pokemon } from 'src/app/services/pokemon.model';

@Component({
  selector: 'poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css'],
})
export class PokeDetailsComponent implements OnInit {
  pokemon?: Observable<Pokemon>;

  private pokemonApiService: PokemonApiService = inject(PokemonApiService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const { name } = this.activatedRoute.snapshot.params;

    this.pokemon = this.pokemonApiService.getPokemonByName(name);
  }
}
