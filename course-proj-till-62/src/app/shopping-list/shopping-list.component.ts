import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients =[];
  constructor() { 
    this.ingredients.push(new IngredientModel('Apples',10));
    this.ingredients.push(new IngredientModel('Tomatoes',35));
  }

  ngOnInit(): void {
  }

}
