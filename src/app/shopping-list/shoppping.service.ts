import { EventEmitter } from '@angular/core';
import { Ingredient } from './../Shared/Ingredient.model';

export class ShoppingService {

    ingredient: Ingredient[] = [
        new Ingredient("Tomato", 5),
        new Ingredient("Onion", 3)
    ]
    
    shoppingBtnClicked = new EventEmitter<{inputName: string, inputContent: string}>();
}