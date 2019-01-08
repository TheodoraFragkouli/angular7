import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Mashroom velvet soup recipe',
      'Mashroom velvet soup',
      'https://www.argiro.gr/wp-content/uploads/2016/03/manitarosoupa-beloute-me-kastana.jpg'),

    new Recipe('Turkey recipe',
      'turkey filled',
      'https://www.sintayes.gr/wp-content/uploads/2014/11/turkey_0-638x350.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();//return copy of the array
  }
}
