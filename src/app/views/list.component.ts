import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'list-view',
  templateUrl: './list.component.html',
  standalone: true,
  imports: [],
})
export class ListComponent implements OnInit {
  private api = inject(ApiService);

  ngOnInit(): void {
    this.api.getRandomPokemon().subscribe(console.log);
  }
}
