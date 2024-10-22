import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Budget, Zone, ModuleQuote, ModuleType } from '../models/budget';
import { BudgetService } from '../services/budget.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budget-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './budget-view.component.html',
  styleUrl: './budget-view.component.css',
})
export class BudgetViewComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private budgetService = inject(BudgetService);

  budget: Budget | undefined;
  budgetId: string | undefined;
  moduleTypes: ModuleType[] = [];

  ngOnInit(): void {
    this.budgetService
      .getBudgetDetail()
      .subscribe((budgetId) => {
        this.budgetId = budgetId;
        this.budgetService.getBudget(this.budgetId!).subscribe((budget) => {
          this.budget = budget;
          this.moduleTypes = budget.modules.map((module) => module.moduleType);console.log(this.budget);
        });console.log(budgetId);
        
      })
  }
}