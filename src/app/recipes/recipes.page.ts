import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpoonacularService } from '../services/spoonacular.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: any[] = [];
  query = '';

  constructor(
    private spoonacularService: SpoonacularService,
    private router: Router
  ) {}

  ngOnInit() {}

  searchRecipes() {
    this.spoonacularService.searchRecipes(this.query).subscribe((data) => {
      console.log(data); 
    this.recipes = data.results;
    });
  }

  openRecipeDetail(recipeId: number) {
    this.router.navigate(['/recipe-detail', recipeId]);
  }
}
