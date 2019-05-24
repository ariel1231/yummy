import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientChanged.subscribe(
      () => this.ingredients = this.slService.getIngredients()
    );
  }

  // onIngredientReceived(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  //   console.log('ingredients:', this.ingredients);
  // }

}
