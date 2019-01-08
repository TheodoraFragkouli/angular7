import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Mashroom velvet soup recipe',
      'Mashroom velvet soup',
      'https://www.argiro.gr/wp-content/uploads/2016/03/manitarosoupa-beloute-me-kastana.jpg'),

    new Recipe('Turkey recipe',
      'turkey filled',
      'https://www.sintayes.gr/wp-content/uploads/2014/11/turkey_0-638x350.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe : Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
