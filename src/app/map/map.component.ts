import { PumpsService } from '../pumps.service';
import { Pump } from '../pump';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
 
const bikeSize = 60;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild(AgmMap) map: AgmMap;

  centerLat: number = 42.367459;
  centerLon: number = -71.080071;
  pumps: Pump[];
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
  
  constructor(
    private pumpService: PumpsService, 
    // public mapsApiLoader: MapsAPILoader,
    // private wrapper: GoogleMapsAPIWrapper
    ) {
      // this.mapsApiLoader = mapsApiLoader;
      // this.wrapper = wrapper;
  }

  // OnInit function.
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
    this.pumpToAdd = {lat: this.map.latitude, lon: this.map.longitude, notes: '', checked: false} as Pump;
  }

  // For when the user clicks the "Confirm Pump" Button, ending the pump creation.
  confirmCreatePump(): void {
    this.pumpService.createPump(this.pumpToAdd)
      .subscribe(pump => {
        this.pumps.push(pump);
      });
    this.pumpToAdd = null;
  }

  // For when the user clicks the "Escape Pump" button, escaping pump creation.
  escapeCreatePump(): void {
    this.pumpToAdd = null;
  }

  // Update location of pump to add in pump creation process.
  newPumpMoved(e): void {
    this.pumpToAdd.lat = e.coords.lat;
    this.pumpToAdd.lon = e.coords.lng;
  }

}
