import { ApplicationServices } from '../../../services/application.services';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/Shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 

  recipe: Recipe[] = []; 
  
 constructor(private applicationServices:ApplicationServices ) {
 }

  ngOnInit(): void {
    this.recipe.push(...this.applicationServices.recipes)
  }


  onRecipeItemClicked(recipe:Recipe){
    this.applicationServices.recipeItemClicked.emit(recipe)
  }

}

