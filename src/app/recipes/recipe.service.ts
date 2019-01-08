import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe('Mashroom velvet soup recipe',
      'Mashroom velvet soup',
      'https://www.argiro.gr/wp-content/uploads/2016/03/manitarosoupa-beloute-me-kastana.jpg',
      [new Ingredient('mushrooms', 10),
        new Ingredient('onions', 2)]),

    new Recipe('Turkey recipe',
      'turkey filled',
      'https://www.sintayes.gr/wp-content/uploads/2014/11/turkey_0-638x350.jpg',
      [new Ingredient('turkey', 1),
        new Ingredient('potatoes', 10)])
  ];

  getRecipes() {
    return this.recipes.slice();//return copy of the array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
