import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { PokemonListResponse } from 'src/interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  httpClient = inject(HttpClient);

  GetPokemons() {
    return this.httpClient.get<PokemonListResponse>(
      'https://pokeapi.co/api/v2/pokemon'
    );
  }
}
