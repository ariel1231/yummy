import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output('ingredientAdded') ingredientEmitter = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.ingredientEmitter.emit(new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    ));
  }

}
