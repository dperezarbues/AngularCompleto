import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharactersListComponent } from './components/characters-list/characters-list.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'characters', component: CharactersListComponent }
        ])
    ],
    exports: [RouterModule]
})
export class CharactersRoutingModule{}