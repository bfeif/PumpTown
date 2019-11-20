import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pump } from './pump';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PumpsService {

  // private pumpsUrl = 'http://localhost:3000/pumps/'; // local json server
  private pumpsUrl = 'https://pump-town-db.herokuapp.com/pumps'; // heroku json server
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
