export interface Pokemon {
  name: string;
  sprites?: {
    front_default: string;
    back_default: string;
  };
}

export interface PokemonListResult {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}
