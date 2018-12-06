import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe',
      'Mashroom velvet soup',
      'https://www.argiro.gr/wp-content/uploads/2016/03/manitarosoupa-beloute-me-kastana.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
