import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pump } from './pump';
import { PUMPS } from './mock-pumps';


@Injectable({
  providedIn: 'root'
})
export class PumpsService {

  constructor() { }

  getPumps(): Observable<Pump[]> {
    return of(PUMPS);
  }
}
