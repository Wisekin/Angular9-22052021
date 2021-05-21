import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 
  
  openDropDown: boolean = true;
 @Output() featureSelected = new EventEmitter<string>();
  onRecipeSelected(feature: string){
   this.featureSelected.emit(feature);
  }
 
  constructor() { }

  ngOnInit(): void {
  }
  dropDownToggle( ){
    this.openDropDown = !this.openDropDown;
    
  }
    
}
