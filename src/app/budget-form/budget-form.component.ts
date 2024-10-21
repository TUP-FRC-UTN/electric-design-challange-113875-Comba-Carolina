import { Component, inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ModuleType, Zone } from '../models/budget';
import { BudgetService } from '../services/budget.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budget-form',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.css',
})
export class BudgetFormComponent implements OnInit {
  moduleTypes: ModuleType[] = [];
  zones = Object.values(Zone);
  private router = inject(Router);
  private budgetService = inject(BudgetService);
  private fb = inject(FormBuilder);

  form: FormGroup = new FormGroup({
    client: new FormControl(''),
    date: new FormControl(''),
    modules: new FormArray([]),
  });

  get modules() {
    return this.form.controls['modules'] as FormArray;
  }

  quitarModule(index: number) {
    this.modules.removeAt(index);
  }

  agregarModule() {
    const module = new FormGroup({
      moduleType: new FormControl(''),
      zone: new FormControl(''),
      quantity: new FormControl(''),
    });
    this.modules.push(module);
  }

  constructor() {}
  ngOnInit(): void {
    this.budgetService.getModuleTypes().subscribe((moduleTypes) => {
      this.moduleTypes = moduleTypes;
    });
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }
}
