import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('A test recipe','this is a test','https://images-gmi-pmc.edge-generalmills.com/c8cbc66e-8f56-4fcd-ae39-582c7d15668f.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
