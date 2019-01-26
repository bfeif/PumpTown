import { Component, OnInit } from '@angular/core';
import { PUMPS } from '../mock-pumps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  centerLat: number = 42.367459;
  centerLon: number = -71.080071;

  pumps = PUMPS;
  
  constructor() { }

  ngOnInit() {
  }

}
