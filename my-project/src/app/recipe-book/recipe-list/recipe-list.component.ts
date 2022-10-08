import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes = [];

  constructor() { 
    this.recipes.push(new RecipeModel('Pizza Recipe','Pizza Desc','https://assets.vogue.in/photos/5ed8e32c64872e9ac717c767/2:3/w_513,h_770,c_limit/pizza%20recipe%20pizza%20to%20make%20at%20home%20quick%20and%20easy%20recipes.jpg'));
    this.recipes.push(new RecipeModel('Pizza Recipe','Pizza Desc','https://assets.vogue.in/photos/5ed8e32c64872e9ac717c767/2:3/w_513,h_770,c_limit/pizza%20recipe%20pizza%20to%20make%20at%20home%20quick%20and%20easy%20recipes.jpg'));
  }

  ngOnInit(): void {
  }

}
