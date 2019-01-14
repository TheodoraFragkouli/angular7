import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

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

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
