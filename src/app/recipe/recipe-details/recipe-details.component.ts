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
 
 

  const value = this.recipeReceived.find(x=> x.id === recipe.id);
  if(this.recipeReceived.length > 0 &&  value !== undefined){
    alert("You have already added this item, please select a different") 
     recipe = {
       id: 0,
       name : "",
       content : "",
       dropdown: false,
      image: ""
     }
    return null; 
  }else{
    this.recipeReceived.push(recipe);
    this.userSelectedRecipe = true; 
    console.log(this.recipeReceived.length)
  }
  return null; 
 
 });
}

  ngOnInit(): void {
  }
  dropDownToggle(item: Recipe ){
     const returnedItem = this.applicationServices.getRecipes(item.id)
       returnedItem!.dropdown = !returnedItem?.dropdown;
    
  }
    
  
}
