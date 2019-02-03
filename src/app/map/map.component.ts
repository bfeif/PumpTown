import { Component, OnInit } from '@angular/core';
import { PumpsService } from '../pumps.service';
import { Pump } from '../pump';

const bikeSize = 60;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  centerLat: number = 42.367459;
  centerLon: number = -71.080071;
  pumps: Pump[];
  isCreating: boolean = false;
  pumpToAdd: Pump;
  public bicon = {
    url: '../assets/images/bike.png',
    scaledSize: {
      width: bikeSize,
      height: bikeSize
    },
    anchor: {
      x: bikeSize/2,
      y: bikeSize/2
    }
  };
  
  constructor(private pumpService: PumpsService) { }

  // Init function.
  ngOnInit() {
    this.getPumps();
  }

  // Gets pumps from the DB service.
  getPumps(): void {
    this.pumpService.getPumps()
      .subscribe(pumps => this.pumps = pumps);
  }

  // For when the user clicks on the "Create Pump" button.
  startCreatePump(): void {
    this.isCreating = true;
    this.pumpToAdd = {lat: 42.36, lon: -71.1, notes: '', checked: false} as Pump;
  }

  // For when the user clicks the "Confirm Pump" Button, ending the pump creation.
  confirmCreatePump(): void {
    this.pumpService.createPump(this.pumpToAdd)
      .subscribe(pump => {
        this.pumps.push(pump);
      });
    this.pumpToAdd = null;
    this.isCreating = false;
  }

  // For when the user clicks the "Escape Pump" button, escaping pump creation.
  escapeCreatePump(): void {
    this.isCreating = false;
    this.pumpToAdd = null;
  }

  // Update location of pump to add in pump creation process.
  newPumpMoved(e): void {
    this.pumpToAdd.lat = e.coords.lat;
    this.pumpToAdd.lon = e.coords.lng;
  }

  // TODO
  setMapCenterLatLon(e): void {
    this.centerLat = e.lat;
    this.centerLon = e.lon;
  }

}
