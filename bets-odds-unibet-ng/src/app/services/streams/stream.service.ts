import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Environnement
import { servicerest } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StreamService {
  constructor(private httpClient: HttpClient) { }
  blockingHttpCall(): Array<string> {
    // console.log('appel bloquant');
    const words: Array<string> = ['Hello', 'World'];
    return words;
  }
  callbackFunction(items: Array<string>) {
    items.forEach((item) => {
      // console.log('item : ', item);
    });
  }
  sleep(ms: number): Promise<Array<string>> {
    const words: Array<string> = ['Hello', 'World'];
    return new Promise(resolve => setTimeout(() => resolve(words), ms));
  }
  getPolicies(id?: number): Observable<any> {
    if (id === undefined) {
      return this.httpClient.get(servicerest.streamServiceURL + 'customers/');
    } else {
      return this.httpClient.get(servicerest.streamServiceURL + 'customers/' + id);
    }
  }
}
