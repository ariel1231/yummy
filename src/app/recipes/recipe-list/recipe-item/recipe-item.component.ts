import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from './../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output('select') recipeIndexEmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onItemSelected(){// no need to emit anything;
    this.recipeIndexEmitter.emit();
    //console.log('recipe item emitted',this.recipe);
  }

}
