import { Injectable} from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private slService: ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
     'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('apples', 4),
      new Ingredient('oranges', 6)]),
    new Recipe('A Test Recipe2',
     'This is another simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('potatoes',2),
      new Ingredient('eggs', 6 )])
    ];

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addToSl(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
