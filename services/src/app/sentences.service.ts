import { Injectable } from '@angular/core';
import { DiceService } from './dice.service';

@Injectable()
export class SentencesService {
  frases:string[] = [
    'primera frase',
    'segunda frase',
    'tercera frase',
    'cuarta frase',
    'quinta frase',
    'sexta frase'
  ];

  phrases:string[] = [
    'first phrase',
    'second phrase',
    'third phrase',
    'fourth phrase',
    'fifth phrase',
    'sixth phrase'
  ];
  constructor(private diceSrv: DiceService) { }
  dameFrase = () => this.frases[this.diceSrv.throwDice(6) - 1];
  getPhrase = () => this.phrases[this.diceSrv.throwDice(6) - 1];
}
