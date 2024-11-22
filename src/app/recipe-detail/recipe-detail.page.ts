import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpoonacularService } from '../services/spoonacular.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe: any = null;

  constructor(
    private route: ActivatedRoute,
    private spoonacularService: SpoonacularService
  ) {}

  ngOnInit() {
    const recipeId = this.route.snapshot.paramMap.get('id');
    if (recipeId) {
      this.spoonacularService.getRecipeDetails(+recipeId).subscribe((data) => {
        this.recipe = data;
      });
    }
  }
}
