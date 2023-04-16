import { Injectable, inject } from '@angular/core';
import { Pokemon, PokemonListResult } from './pokemon.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class PokemonApiService {
  private httpClient: HttpClient = inject(HttpClient);

  getPokemonList(): Observable<Pokemon[]> {
    return this.httpClient
      .get<PokemonListResult>('https://pokeapi.co/api/v2/pokemon')
      .pipe(map((response) => response.results));
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
  }
}
