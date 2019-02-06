// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { Pump } from './pump';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Pump } from './pump';
import { Http, Response } from '@angular/http';

@Injectable()
export class PumpsService {

  // private pumpsUrl = 'http://my-json-server.typicode.com/bfeif/PumpTownDB/pumps/'; // replace this with some json file
  // private pumpsUrl = 'http://localhost:3000/pumps/'; // local json server
  // private pumpsUrl = 'https://pump-town-db.herokuapp.com/pumps'; // heroku json server
  private pumpsUrl = '/api/pumps';
  constructor(private http: Http) { }

  getPumps(): Promise<void | Pump[]> {
    return this.http.get(this.pumpsUrl)
               .toPromise()
               .then(response => response.json() as Pump[])
               .catch(this.handleError);
  }

  // post("/api/contacts")
  createPump(newPump: Pump): Promise<void | Pump> {
    return this.http.post(this.pumpsUrl, newPump)
               .toPromise()
               .then(response => response.json() as Pump)
               .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
