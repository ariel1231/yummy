import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() ItemSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onRecipesSelected(){
    //console.log('Recipes Selected!');
    this.ItemSelected.emit('Recipes');

  }

  onShoppingListSelect(){
    //console.log('Shopping List Selected!');
    this.ItemSelected.emit('Shopping List');

  }

}
