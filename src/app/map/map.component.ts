import { Component, OnInit } from '@angular/core';
import { PUMPS } from '../mock-pumps';
import { PumpsService } from '../pumps.service';
import { Pump } from '../pump';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  centerLat: number = 42.367459;
  centerLon: number = -71.080071;

  // pumps = PUMPS;
  pumps: Pump[];
  
  constructor(private pumpService: PumpsService) { }

  ngOnInit() {
    this.getPumps();
  }

  getPumps(): void {
    this.pumpService.getPumps()
      .subscribe(pumps => this.pumps = pumps);
  }

}
