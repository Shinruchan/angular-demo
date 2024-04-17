import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../components/card/card.component';
import { Observable } from 'rxjs';
import { ApiService, Pokemon } from '../services/api.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'home-view',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [FormsModule, CardComponent, AsyncPipe],
})
export class HomeComponent {
  query: string = '';
  pokemon$?: Observable<Pokemon>;

  private api = inject(ApiService);
  private timeout?: number;

  searchForPokemon() {
    clearTimeout(this.timeout);

    this.timeout = window.setTimeout(() => {
      this.searchDebounced();
    }, 250);
  }

  private searchDebounced() {
    this.pokemon$ = this.api.getPokemon(this.query.toLowerCase());
  }
}
