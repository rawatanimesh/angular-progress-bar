# Progress Bar

Fully customizable, responsive and light weight 'Progress Bar' angular component without external libraries/dependencies.

![alt text](img/file-save-as.png)

## Demo

Checkout the demo on StackBlitz - https://angular-progress-linear-radial-bar.stackblitz.io/

## Features
```
1) Choose linear or radial progress bar
2) Fully customizable. 
3) Responsive design to adjust all type of project requirements.
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
Property `barProperties` accepts JSON object which will customize the progress bar according to user choice. 

### progress-bar.component.ts
``` typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'file-save-as',
  templateUrl: './file-save-as.component.html',
  styleUrls: ['./file-save-as.component.scss']
})
export class FileSaveAsComponent {
  @Input() fileContent: any;

  //you can enter your own file name and extension
  saveAsProject(){
    this.writeContents(this.fileContent, 'Sample File'+'.txt', 'text/plain');
  }
  writeContents(content, fileName, contentType) {
    var a = document.createElement('a');
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
}

```

### progress-bar.component.html
``` typescript
<div class="file-container">
  <button class="file-button" (click)="saveAsProject()">Save As</button>
  <br>
</div>
```

### progress-bar.component.scss
``` typescript
.file-container{
    text-align: center;
  }
.file-button{
    outline: none;
    cursor: pointer;
    border: 1px solid #007bff;
    border-radius: 5px;
    background: #007bff;
    color: #fff;
    font-size: 15px;
    padding: 10px;
    margin: 5px 10px;
    min-width: 100px;
  }
.file-button:hover{
    background: #0069d9;
    border: 1px solid #0062cc;
  }
```


## Author

animesh.rawat20@gmail.com
