# Progress Bar

Fully customizable, responsive and light weight 'Progress Bar' angular component without external libraries/dependencies. Special effort has been made to keep the component files free from coding logic which has been handled on the HTML file of the component.

![alt text](img/radial-bar.png)
![alt text](img/linear-bar.png)

## Demo

Checkout the demo on StackBlitz - https://angular-progress-linear-radial-bar.stackblitz.io/

## Features
```
1) Change between 'linear' and 'radial' progress bar.
2) Fully 'customizable'. Change color, size, label properties, animations etc. 
3) 'Responsive' design to adjust all type of project requirements.
```

## Adding the component in your project

### Add Component in module
Import
`
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
`

Declaration
`
declarations: [
    ProgressBarComponent
  ]
`

### Add selector in HTML
```
<progress-bar [barProperties]="barOptions"></progress-bar>
```

### Selector Properties
Property `barProperties` accepts JSON object which customize the progress bar according to user choice.

You can send value `linear` for linear bar and `radial` for radial bar with `barType` key.

Key `progress` can have value between 0 to 100.

Change and play with other key-values to get bar which fits your purpose.


### Sample JSON Object
``` typescript
barOptions = {
    barType: 'linear', //or 'radial' for radial bar
    color: "#0e90d2",
    secondColor: "#D3D3D3",
    progress: 66, //between 0 to 100
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
      depth: 3, //max 8
      size: 9,
      label: {
        enable: true,
        color: "#09608c",
      }
    }
  }
```

### progress-bar.component.ts
``` typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent{
  @Input() barProperties: any ;
  constructor() { }
}

```

### progress-bar.component.html
``` typescript
<!-- radial bar -->
<div *ngIf="barProperties.barType == 'radial'" class="set-size charts-container"
  [style.font-size.em]="barProperties.radial.size">
  <div>
    <div class="pie-wrapper progress-radial style-2">
      <span *ngIf="barProperties.radial.label.enable && barProperties.progress <= 100 && barProperties.progress >= 0" class="label"
       [style.color]="barProperties.radial.label.color" >
        {{barProperties.progress}}
        <span *ngIf="!barProperties.progress">0</span>
        <span class="smaller" [style.color]="barProperties.radial.label.color" >
          %</span>
        </span>
      <div class="pie" >
        <div class="half-circle left-side" [style.border-color]='barProperties.color' 
        [style.transform]="'rotate(' + (barProperties.progress * 3.6) + 'deg)'"
        [style.border]="barProperties.progress > 0 ? barProperties.color +' '+ (barProperties.radial.depth)/16+ 'em solid' : barProperties.secondColor +' '+ (barProperties.radial.depth)/16+ 'em solid'"
        >
        </div>
        <div class="half-circle" [ngClass]="{'right-side': barProperties.progress <=50,'right-side2': barProperties.progress >50 }"
          [style.border-color]='barProperties.progress > 50 ? barProperties.color : barProperties.secondColor'
          [style.border]="barProperties.progress > 50 ? barProperties.color +' '+ (barProperties.radial.depth)/16+ 'em solid' : barProperties.secondColor +' '+ (barProperties.radial.depth)/16+ 'em solid'"
          ></div>
      </div>
      <div class="shadow" [style.border]="barProperties.secondColor+' '+ (barProperties.radial.depth)/16+ 'em solid'"></div>
    </div>
  </div>
</div>

<!-- linear bar -->
<div *ngIf="barProperties.barType == 'linear'" [style.height.px]='barProperties.linear.depth'
[style.background-color]='barProperties.secondColor' class="progress-linear">
  <div class="bar" *ngIf="barProperties.progress && barProperties.progress <= 100 && barProperties.progress >= 0" [ngClass]="{stripped: barProperties.linear.stripped, active: barProperties.linear.active }"
   [style.width.%]='barProperties.progress' [style.height.px]='barProperties.linear.depth'
   [style.line-height.px]='barProperties.linear.depth'
    [style.background-color]='barProperties.color'>
    <span *ngIf="barProperties.linear.label.enable && barProperties.progress <= 100" [style.color]='barProperties.linear.label.color'
    [style.font-size.px]="barProperties.linear.label.fontSize">
      {{barProperties.linear.label.value}}
    </span>
    <span *ngIf="barProperties.linear.label.showPercentage" [style.color]='barProperties.linear.label.color'
    [style.font-size.px]="barProperties.linear.label.fontSize">
      {{barProperties.progress+'%'}}
    </span>
  </div> 
  <div class="bar" *ngIf="!barProperties.progress || barProperties.progress > 100 || barProperties.progress < 0" [style.width.%]='0'></div>
</div>
```

### progress-bar.component.scss
``` typescript

    .progress-linear {
    overflow: hidden;
    height: 18px;
    //background-color: #f7f7f7;
    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
    }
    
    .progress-linear .bar {
    height: 18px;
    -webkit-transition: width 0.6s ease;
    -moz-transition: width 0.6s ease;
    -ms-transition: width 0.6s ease;
    -o-transition: width 0.6s ease;
    transition: width 0.6s ease;
    }

    .stripped {
        // special stripes with linear gradient
        background-image:
          linear-gradient(-45deg,
            rgba(255, 255, 255, 0.2) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.2) 75%,
            transparent 75%,
            transparent
          )
        ;
        background-size: 50px 50px;
        background-repeat: repeat;
      }

      .active{
        // apply animation
        animation:loading-stripes 2s linear infinite;
      }
      @keyframes loading-stripes{
        from {background-position: 0 0;}
        to {background-position: 50px 0;}
      }


/* Radial Bar styling*/
$bg-color: #34495e;
$default-size: 1em;
$label-font-size: $default-size / 4;
$label-font-size-redo: $default-size * 4;

// -- mixins
@mixin size($width, $height) {
  height: $height;
  width: $width;
}

@mixin draw-progress($progress, $color) {
  .pie {
    .half-circle {
      border-color: $color;
    }

    @if $progress <= 50 {
      .right-side {
        display: none;
      }
    } @else {
      clip: rect(auto, auto, auto, auto);
      .right-side2 {
        transform: rotate(180deg);
      }
    }
  }
}

// -- selectors
*,
*:before,
*:after {
  box-sizing: border-box;
}

.set-size {
  font-size: 8em;
}

.charts-container {
  &:after {
    clear: both;
    content: '';
    display: table;
  }
}

.pie-wrapper {
  @include size($default-size, $default-size);
  margin: 0 auto;
  position: relative;

  .pie {
    @include size(100%, 100%);
    clip: rect(0, $default-size, $default-size, $default-size / 2);
    left: 0;
    position: absolute;
    top: 0;

    .half-circle {
      @include size(100%, 100%);
      border: ($default-size / 10) solid #bdc3c7;
      border-radius: 50%;
      clip: rect(0, $default-size / 2, $default-size, 0);
      left: 0;
      position: absolute;
      top: 0;
    }
  }

  .label {
    background: $bg-color;
    border-radius: 50%;
    bottom: $label-font-size-redo / 10;
    color: #ecf0f1;
    cursor: default;
    display: block;
    font-size: $label-font-size;
    left: $label-font-size-redo / 10;
    line-height: $label-font-size-redo * .70;
    position: absolute;
    right: $label-font-size-redo / 10;
    text-align: center;
    top: $label-font-size-redo / 10;
    z-index: 1;
    .smaller {
      color: #bdc3c7;
      font-size: .45em;
      padding-bottom: 20px;
      vertical-align: super;
    }
  }

  .shadow {
    @include size(100%, 100%);
    border: $default-size / 10 solid #bdc3c7;
    border-radius: 50%;
  }

  &.style-2 {
    .label {
      background: none;
      color: #7f8c8d;

      .smaller {
        color: #bdc3c7;
      }
    }
  }
  &.progress-radial {
    @include draw-progress(51, #bdc3c7);
  }
}

```


## Author

animesh.rawat20@gmail.com
