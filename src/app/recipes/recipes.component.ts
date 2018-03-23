import {Component, OnInit} from '@angular/core';
import {RecipeService} from './recipe.service';
import {Recipe} from './Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelectedEmitter.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

}
