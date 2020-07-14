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
  

  // private recipes: Recipe[] = [
  //   new Recipe('A Test Recipe',
  //    'This is simply a test',
  //     'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
  //     [new Ingredient('apples', 4),
  //     new Ingredient('oranges', 6)]),
  //   new Recipe('A Test Recipe2',
  //    'This is another simply a test',
  //     'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
  //     [new Ingredient('potatoes',2),
  //     new Ingredient('eggs', 6 )])
  //   ];

  private recipes: Recipe[] = [];
  recipesChanged = new Subject<Recipe[]>();
 
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addToSl(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  editRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

