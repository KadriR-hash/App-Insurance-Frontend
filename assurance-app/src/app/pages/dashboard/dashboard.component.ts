import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/plan';
import { PlanService } from 'src/app/plan.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public plans: Plan[];
  public editPlan: Plan;
  public deletePlan: Plan;
  
  constructor(private planService: PlanService) { }

  ngOnInit(): void {
  }
  public getplans(): void {
    this.planService.getPlans().subscribe(
      (response: Plan[]) => {
        this.plans = response;
        console.log(this.plans);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public searchPlans(key: string): void {
    console.log(key);
    const results: Plan[] = [];
    for (const plan of this.plans) {
      if (plan.provider.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || plan.doctorcoverage.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || plan.drugcoverage.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || plan.feature.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(plan);
      }
    }
    this.plans = results;
    if (results.length === 0 || !key) {
      this.getplans();
    }
  }

  public onOpenModal(plan: Plan, mode: string): void {
    const container = document.getElementById('main-container')!;
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPlanModal');
    }
    if (mode === 'edit') {
      this.editPlan = plan;
      button.setAttribute('data-target', '#updatePlanModal');
    }
    if (mode === 'delete') {
      this.deletePlan = plan;
      button.setAttribute('data-target', '#deletePlanModal');
    }

}







}
