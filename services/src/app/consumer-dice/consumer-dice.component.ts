import { Component, OnInit } from '@angular/core';
import { DiceService } from '../dice.service';

@Component({
  selector: 'app-consumer-dice',
  templateUrl: './consumer-dice.component.html',
  styleUrls: ['./consumer-dice.component.css']
})
export class ConsumerDiceComponent implements OnInit {
  throwResult: number;
  
  constructor( private diceSrv: DiceService) { } //DEPENDENCIAS EN CONSTRUCTOR

  ngOnInit() {
    this.throwResult = this.diceSrv.throwDice(12);
  }

}
