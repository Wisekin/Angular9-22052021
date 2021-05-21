import { DropdownDirective } from './../../directive/dropdown.directive';
import { ApplicationServices } from './../../services/application.services';
import { Component,   OnInit } from '@angular/core';
import { Recipe } from 'src/app/Shared/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 userSelectedRecipe = false;
 recipeReceived: Recipe[] = [];
constructor(private applicationServices: ApplicationServices) { 

 this.applicationServices.recipeItemClicked.subscribe((recipe:Recipe)=> {
 this.recipeReceived.push(recipe);
 this.userSelectedRecipe = true; 
 });
}

  ngOnInit(): void {
  }
  dropDownToggle(item: Recipe ){
     const returnedItem = this.applicationServices.getRecipes(item.id)
       returnedItem!.dropdown = !returnedItem?.dropdown;
    
  }
    
  
}
