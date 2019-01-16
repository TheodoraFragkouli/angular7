import {Injectable} from "@angular/core";
import {RecipeService} from "../recipes/recipe.service";
import {map} from "rxjs/operators";
import {Recipe} from "../recipes/recipe.model";
import {AuthService} from "../auth/auth.service";
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    // return this.httpClient.put('https://udemy-ng-26e8a.firebaseio.com/recipes.json',
    //   this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   // headers: new HttpHeaders().set('Authorization', '')
    //     params: new HttpParams().set('auth', token)
    //   });
    const req = new HttpRequest('PUT', 'https://udemy-ng-26e8a.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes() {
    // this.httpClient.get<Recipe[]>('https://udemy-ng-26e8a.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://udemy-ng-26e8a.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .pipe(map((recipes) => {
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }))
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
    });
  }

}
