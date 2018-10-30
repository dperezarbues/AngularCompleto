import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SentencesService } from './sentences.service';

import { AppComponent } from './app.component';
import { ConsumerDiceComponent } from './consumer-dice/consumer-dice.component';
import { ConsumerSentenceComponent } from './consumer-sentence/consumer-sentence.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumerDiceComponent,
    ConsumerSentenceComponent
  ],
  imports: [
    BrowserModule
  ],
  //providers: [DiceService], //PODEMOS INYECTAR AQUI O CON EL ROOT en el servicio
  providers: [SentencesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
