import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';
import { PokeSearchComponent } from './components/poke-search/poke-search.component';

const routes: Routes = [
  {
    path: '',
    component: PokeListComponent,
  },
  {
    path: 'pokemon/:name',
    component: PokeDetailsComponent,
  },
  {
    path: 'search',
    component: PokeSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
