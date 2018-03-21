import { Component, OnInit } from '@angular/core';
import {Recipe} from '../Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  riceUrl = 'https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/Cheesy-Cheddar-Broccoli-Casserole_EXPS_SDFM17_28900_C09_30_6b.jpg';
  recipies: Recipe[] = [
    new Recipe('Rice', 'first rice recipe', this.riceUrl)
  ];

  constructor() { }

  ngOnInit() {
  }

}
