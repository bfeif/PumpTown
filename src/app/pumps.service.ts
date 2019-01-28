import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pump } from './pump';
import { PUMPS } from './mock-pumps';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PumpsService {

  // private pumpsUrl = 'http://my-json-server.typicode.com/bfeif/PumpTownDB/pumps/'; //replace this with some json file
  private pumpsUrl = 'http://localhost:3000/pumps/'; //replace this with some json file
  constructor(private http: HttpClient) { }

  getPumps(): Observable<Pump[]> {
    return this.http.get<Pump[]>(this.pumpsUrl)
  }

  createPump(pump: Pump): Observable<Pump> {
    return this.http.post<Pump>(this.pumpsUrl, pump, httpOptions).pipe(
      tap((pump: Pump) => this.log('added pump w/ id=${pump.id}'))
    )
  }

  log(message: string) {
    console.log(message);
  }
}
