import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  barOptions = {
    barType: 'linear',
    color: "#0e90d2",
    secondColor: "#bdc3c7",
    progress: 66,
    linear: {
      depth: 22,
      stripped: true,
      active: true,
      label: {
        enable: true,
        value: "Linear Bar",
        color: "#fff",
        fontSize: 15,
        showPercentage: true,
      }
    },
    radial: {
      depth: 3,
      size: 9,
      // secondColor: "#bdc3c7",
      label: {
        enable: true,
        color: "#09608c",
      }
    }
  }
}

