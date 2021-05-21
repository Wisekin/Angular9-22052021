import { Ingredient } from './../Shared/Ingredient.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
 
})
export class ShoppingListComponent implements OnInit {
 
nameInput = "";
contentInput = 0;
ingredients: Ingredient[] = [];
  
constructor() { }

  ngOnInit(): void {
   
  }

  onAddClicked(){
   this.ingredients.push({name:  this.nameInput, amount: this.contentInput})
   this.nameInput = "";
   this.contentInput = 0
  }


}
