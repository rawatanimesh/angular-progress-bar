import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  barOptions = {
    barType: 'linear',
    color:"#0e90d2",
    progress:"51",
    depth: 18,
    label:{
      enable: true,
      value: "Progress Bar",
      color: "#fff",
      fontSize: 14
    },
    stripped: true,
    active: true,
  }
}

