import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  barOptions = {
    barType: 'radial',
    color:"#0e90d2",
    progress:66,
    linear:{
      depth: 22,
      stripped: true,
      active: true,
      label:{
        enable: true,
        value: "Progress Bar",
        color: "#fff",
        fontSize: 15
      }
    },
    radial:{
      depth: 3,
      size: 9,
      label:{
        enable: true,
        color: "#09608c",
      }
    }
     
  }
}

