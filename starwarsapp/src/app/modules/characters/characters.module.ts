import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharactersRoutingModule } from './characters-routing.module';

//Components
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterComponent } from './components/character/character.component';

//Services
import { CharactersService } from './services/characters.service';

@NgModule({
  declarations: [
    CharactersListComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  providers: [
    CharactersService
  ],
  bootstrap: []
})
export class CharactersModule { }
