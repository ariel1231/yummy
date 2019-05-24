import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {

  @Input('recipeToDisplay') recipe: Recipe;
  // recipe: Recipe;


  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.recipe = recipe;
    //   }
    // );
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
  }

  sendIngredients() {
    this.recipe.ingredients.forEach(ingredient => {
      this.slService.addIngredient(ingredient);
    });
    // this.slService.addIngredient(this.recipe.ingredients);

  }






}
