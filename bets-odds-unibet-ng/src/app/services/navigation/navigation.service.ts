import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { from, Observable, of, pipe } from 'rxjs';
import { filter, map, delay, concatMap } from 'rxjs/operators';
// Service Streams
import { StreamService } from '../streams/stream.service';
// Environnement
import { environment } from '../../../environments/environment';
// Classe Calculator Event
import { CalculatorService } from '../../services/events/calculator.service';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(public router: Router, public streamService: StreamService, public calculatorService: CalculatorService) {
    console.log('Navigation Service is constructed ', environment);
    // Filtrer les évènements de routage et garder seulement les évènements Start et End
    router.events.pipe(filter(event => this.isStart(event) || this.isEnd(event)))
    .subscribe((event) => {
        if (event instanceof NavigationStart) {
          // console.log('Navigation vers : ', event.url);
          // Synchronous call with blocking code
          // const words = this.streamService.blockingHttpCall();
          // console.log('On poursuit le code après exécution bloquant : itération sur la liste des words');
          // words.forEach((word) => {
              // console.log(word);
          // });
          // Non-blocking code with callback functions
          // streamService.getPolicies().subscribe((policies) => {
            // console.log('Get Policies : ', policies);
          // });
          // console.log('After Non-blocking code with callback functions');
          // Code sequential (non blocking) to guarantee the proper order of steps
          // Event emitters
          // calculatorService.emitEvent('add', 1, 2);
          // calculatorService.emitEvent('sub', 1, 2);
          // Promises
          // console.log('Process 2 : Début Promises');
          let a = 20;
          const b = 22;
          const c = a + b;
          a = 100;
          // console.log('c = ' + c);
          const A$ = [20];
          const B$ = [22];
          const C$ = A$.concat(B$).reduce((S1, S2) => S1 + S2);
          A$.push(100);
          // console.log('Stream C$ : ', C$);
          const dataArray = [1, 2, 3];
          const streamArray: Observable<number> = from(dataArray);
          const pipeArray: Observable<number> = streamArray.pipe(concatMap(val => {
            return of(val).pipe(delay(1000));
          }
          ));
          pipeArray.subscribe((val) => console.log(val));

          // Chapter 2 : Reacting with RxJS
          // 1 : Looking at streams as the main unit of work
          // 2 : Understanding functional programming’s influence on RxJS
          // 3 : Identifying different types of data sources and how to handle them
          // 4 : Modeling data sources as RxJS observables
          // 5 : Consuming observables with observers
          const isEvenFilter = (num: number) => num % 2 === 0;
          const squareComputation = (num: number) => num * num;
          const sumOperation = (n1: number, n2: number) => n1 + n2;
          const arrayNumber = [1, 2, 3, 4, 5];
          const valueArray: number = arrayNumber.filter(isEvenFilter).map(squareComputation).reduce(sumOperation);
          console.log('value Array', valueArray);


          streamService.getPolicies().toPromise()
          .then((policies) => {
              const idArrays = [];
              console.log('Process 2 : Réponse du service getPolicies', policies);
              const source = from(policies);
              const ids = source.pipe(map(({ id }) => id));
              ids.subscribe(val => idArrays.push(val));
              return idArrays;

          }
          ).then((idArrays: any) => {
            console.log('Process 2 : another process', idArrays instanceof Array);
          });

          // Process 1
          // console.log('Process 1 : Début Non-blocking code');
          streamService.getPolicies().subscribe((customers) => {
            console.log('Process 1 : List of customers : ', customers);
            customers.forEach(customer => {
              this.getCustomer(customer).then((myCustomer) => {
                console.log('Process 1 : Customer Non blocking  : ', myCustomer);
              });
            });
          });
        }
        if (event instanceof NavigationEnd) {
          // console.log('Navigation End : ');
        }
        if (event instanceof NavigationCancel) {
          // console.log('Navigation Cancel : ');
        }
    });
  }
  isStart(e: any): boolean {
    return e instanceof NavigationStart;
  }
  isEnd(e: any): boolean {
    return e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError;
  }
  async getCustomer(customer: any) {
        return await this.streamService.getPolicies(customer.id).toPromise();
  }

}
