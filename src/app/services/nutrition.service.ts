// src/app/services/nutrition.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {

  private apiUrl = 'https://api.edamam.com/api/food-database/v2/nutrients';
  private appId = 'a18c2932';  // Substitua pelo seu App ID da Edamam
  private appKey = '98317f5b778deba0df0b4beca591d916';  // Substitua pela sua chave de API da Edamam

  constructor(private http: HttpClient) { }

  getNutrients(food: string): Observable<any> {
    const url = `${this.apiUrl}?app_id=${this.appId}&app_key=${this.appKey}`;
    const body = {
      ingredients: [
        {
          quantity: 1,
          measureURI: "http://www.edamam.com/ontologies/edamam.owl#Kilogram",
          foodId: food  // O ID do alimento, que você obterá ao buscar na API Edamam
        }
      ]
    };
    return this.http.post(url, body);
  }
}
