import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpoonacularService {
  private apiKey = '4032a5e4a1094238aa0c3deccb17acb0';
  private baseUrl = 'https://api.spoonacular.com/';

  constructor(private http: HttpClient) {}

  searchRecipes(query: string): Observable<any> {
    const url = `${this.baseUrl}recipes/complexSearch?query=${query}&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
  

  getRecipeDetails(recipeId: number): Observable<any> {
    const url = `${this.baseUrl}recipes/${recipeId}/information?apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}
