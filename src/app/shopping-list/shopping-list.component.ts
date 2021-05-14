import { ToParent } from './../shared/toparent.model';
import { ServerMessage } from './../shared/servermessage.model';
import { Ingredient } from './../shared/Ingredient.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredient: Ingredient[] = [
  new Ingredient("Tomato", 5),
  new Ingredient("Onion", 3)
]


@Output() appComArr: ToParent[] = [];

@Output()  shoppingBtnClicked = new EventEmitter<{inputName: string, inputContent: string}>();
nameInput = "";
contentInput = "";
servers: ServerMessage [] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onAddClicked(){
   this.servers.push(new ServerMessage(this.nameInput, this.contentInput))
   this.shoppingBtnClicked.emit({inputName: this.nameInput, inputContent: this.contentInput});
  }

  onInputsPopulated(){
    this.appComArr.push({name: this.nameInput, content: this.contentInput})
  }
}
