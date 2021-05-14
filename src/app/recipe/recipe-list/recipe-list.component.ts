import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe [] = [new Recipe("The test recipe", "just to test this model",
  "https://images.freeimages.com/images/large-previews/e7c/recipe-1538714.jpg")]; 
  constructor() { }

  ngOnInit(): void {
  }
  addNewRecipe(){
    this.recipe.push(new Recipe("Test recipe", "just to test this model", 
    "https://images.freeimages.com/images/large-previews/e7c/recipe-1538714.jpg"))
  }
}
