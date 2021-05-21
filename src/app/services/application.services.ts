import { EventEmitter } from '@angular/core';
import { Recipe } from '../Shared/recipe.model';
export class ApplicationServices {


    recipeItemClicked = new EventEmitter<Recipe>();
    

    recipes: Recipe [] =  [  {
        id: 1,
        dropdown: true,
        name: "The first  recipe",
        content: "just to test this just to test this just to test this just to test this model",
        image: "https://static.superiorwallpapers.com/images/lthumbs/2015-10/11205_Your-secret-book-with-food-recipes.jpg"
    },
    {
        id: 2,
        dropdown: true,
        name: "The Second  recipe",
        content: "just to test this just to test this just to test this just to test this model",
        image: "https://image.freepik.com/free-photo/thai-food-nam-prik-ong-pork-cooked-with-tomato_1150-38207.jpg"
    }]
  
    getRecipes(id: number){
      const recipeWithId = this.recipes.find(x => {
          return  x.id === id;
        })

        return recipeWithId;
    }


}