import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() { }



  throwDice = (val:number = 6) => Math.ceil(Math.random()*val);
}
