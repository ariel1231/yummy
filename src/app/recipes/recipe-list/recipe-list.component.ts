import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output('selected') recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'this is a test recipe',
    'https://www.tasteofhome.com/wp-content/uploads/2018/01/Garlic-Lemon-Shrimp_EXPS_SDON16_45286__D06_09_5b-696x696.jpg')
    ,new Recipe('Another Test Recipe', 'this is another test recipe',
    'https://www.tasteofhome.com/wp-content/uploads/2018/01/Garlic-Lemon-Shrimp_EXPS_SDON16_45286__D06_09_5b-696x696.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
    //console.log('emitted recipe-list:',recipe);
  }

}
