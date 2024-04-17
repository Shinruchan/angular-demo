import { Component, OnInit, inject } from '@angular/core';
import { ApiService, Pokemon } from '../services/api.service';
import { CardComponent } from '../components/card/card.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'list-view',
  templateUrl: './list.component.html',
  standalone: true,
  imports: [CardComponent, AsyncPipe],
})
export class ListComponent implements OnInit {
  private api = inject(ApiService);

  pokemon$?: Observable<Pokemon>;

  ngOnInit(): void {
    this.pokemon$ = this.api.getRandomPokemon();
  }

  refreshPokemon() {
    this.pokemon$ = this.api.getRandomPokemon();
  }
}
