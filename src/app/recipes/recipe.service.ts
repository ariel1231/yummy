import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Lemmon Button Garlic Shrimp Pasta',
      'A easy 30-minute pasta recipe ',
      'https://www.tasteofhome.com/wp-content/uploads/2018/01/Garlic-Lemon-Shrimp_EXPS_SDON16_45286__D06_09_5b-696x696.jpg',
      [
        new Ingredient('lemmon', 2),
        new Ingredient('shrimp', 10),
        new Ingredient('pasta', 1),
        new Ingredient('button', 0.5),
        new Ingredient('garlic', 1)
      ]
    ),
    new Recipe(
      'Blue Berry Pie',
      'A nice after-dinner pie',
      '../../assets/images/recipe_pics/blue_berry_pie.jpeg',
      [
        new Ingredient('blueberry', 2),
        new Ingredient('sugar', 1),
        new Ingredient('pie crust', 1)
      ]
    )
  ];

  recipeSelected = new EventEmitter<Recipe>();


  getRecipes() {
    return this.recipes.slice(); // return a new array
  }





}
