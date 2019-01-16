import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  barOptions = {
    color:"#0e90d2",
    width:"90%",
    label:{
      enable: true,
      value: "Progress Bar",
      color: "#fff"
    },
    stripped: true,
    active: true
  }
}

