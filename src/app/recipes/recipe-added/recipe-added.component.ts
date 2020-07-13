import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-added',
  templateUrl: './recipe-added.component.html',
  styleUrls: ['./recipe-added.component.css']
})
export class RecipeAddedComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route:ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm()
      }
    );
  }
  private initForm(){
    let recipeName = '';
    let recipeImgPath = '';
    let recipeDescription = '';

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id)
      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imgPath': new FormControl(recipeImgPath),
      'description': new FormControl(recipeDescription),

    });
  }

}
