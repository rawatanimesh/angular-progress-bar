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
    progress:"55",
    linear:{
      depth: 18,
      stripped: true,
      active: true,
      label:{
        enable: true,
        value: "Progress Bar",
        color: "#fff",
        fontSize: 14
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

