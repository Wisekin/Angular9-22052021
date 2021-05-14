import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fld5';
   recipeItem = [{type: "server", name: "test recipe", content: "dynamic content form database database dynamic content form database dynamic content form database"},
   {type: "server2", name: "test recipe2", content: "dynamic content form database2 dynamic content form database dynamic content form database"},
   
  ]

  
onDataAdded(event:any){
  this.recipeItem.push({ type: "static", name: event.inputName, content: event.inputContent});
  }
}
