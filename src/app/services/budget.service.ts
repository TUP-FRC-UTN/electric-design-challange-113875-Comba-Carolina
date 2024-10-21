import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModuleType, Budget } from '../models/budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  constructor() { }
  private http = inject(HttpClient);

  private apiUrl: string = 'http://localhost:3000';

  
  getModuleTypes(): Observable<ModuleType[]> {
    return this.http.get<ModuleType[]>(`${this.apiUrl}/module-types`);
  }

  getBudgets(): Observable<Budget[]> {
    return this.http.get<Budget[]>(`${this.apiUrl}/budgets`);
  }

  getBudget(id: string): Observable<Budget> {
    return this.http.get<Budget>(`${this.apiUrl}/budgets/${id}`);
  }

  createBudget(budget: Budget): Observable<Budget> {
    return this.http.post<Budget>(`${this.apiUrl}/budgets`, budget);
  }
}
