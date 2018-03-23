import {Recipe} from './Recipe';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  id: string;
  constructor() {
    this.id = Date.now() + '';
  }

  recipeSelectedEmitter = new EventEmitter<Recipe>();
  riceUrl = 'https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/Cheesy-Cheddar-Broccoli-Casserole_EXPS_SDFM17_28900_C09_30_6b.jpg';
  private recipes: Recipe[] = [
    new Recipe('Rice', 'first rice recipe', this.riceUrl),
    new Recipe('FriedRice', 'second rice recipe', this.riceUrl)
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
