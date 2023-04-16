import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/navbar/nav.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokemonApiService } from './services/pokemon-api.service';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';
import { PokeSearchComponent } from './components/poke-search/poke-search.component';
import { PokeImagePipe } from './poke-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PokeListComponent,
    PokeCardComponent,
    PokeDetailsComponent,
    PokeSearchComponent,
    PokeImagePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [PokemonApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
