import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public calcEvent: EventEmitter;

  constructor() {
    this.calcEvent = new EventEmitter();
    this.addListenerEvent_ADD();
    this.addListenerEvent_SUB();
    this.addListenerEvent_RESULT();
   }

   emitEvent(name: string, ...value: number[]) {
    this.calcEvent.emit(name, value);
}
    addListenerEvent_ADD() {
        // console.log('Ajout Listener ADD');
        this.calcEvent.addListener('add', (...value: number[]) => {
            // console.log('A', ...value[0][0]);
            // console.log('B', value[0][1]);
            this.emitEvent('result', value[0][0] + value[0][1]);
        });
    }
    addListenerEvent_SUB() {
      console.log('Ajout Listener SUB');
      this.calcEvent.addListener('sub', (...value: number[]) => {
          // console.log('A', value[0][0]);
          // console.log('B', value[0][1]);
          this.emitEvent('result', value[0][0] - value[0][1]);
      });
  }
    addListenerEvent_RESULT() {
        // console.log('Ajout Listener RESULT');
        this.calcEvent.addListener('result', (result: number[]) => {
          // console.log('Résultat : ', result[0]);
        });
    }
}
