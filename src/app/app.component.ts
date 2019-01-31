import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PumpTown';
  description = "Don't bike unpumped--here are some spots around Boston to juice up those tires!"

  // constructor(private httpClient: HttpClient) {}
}