import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export interface Pokemon {
  name: string;
  weight: number;
  abilities: {
    ability: {
      name: string;
    };
  }[];
  cries: {
    latest: string;
  };
  sprites: {
    other: {
      showdown: {
        front_default: string;
      };
    };
  };
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private httpClient = inject(HttpClient);

  getRandomPokemon() {
    return this.httpClient.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${Math.round(Math.random() * 251)}`
    );
  }
}
