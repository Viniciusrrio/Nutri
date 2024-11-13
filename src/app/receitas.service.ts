import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  private apiUrl = 'http://localhost:3000/receitas';

  constructor(private http: HttpClient) { }

  // Método para obter todas as receitas
  getReceitas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Método para obter detalhes de uma receita
  getDetalhesReceita(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
