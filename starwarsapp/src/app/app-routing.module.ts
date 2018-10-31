import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharactersListComponent } from './modules/characters/components/characters-list/characters-list.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
        { path: '', component: CharactersListComponent, pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}