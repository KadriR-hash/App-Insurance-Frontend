import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Plan } from 'src/app/plan';
import { PlanService } from 'src/app/plan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurances',
  templateUrl: './insurances.component.html',
  styleUrls: ['./insurances.component.css']
})
export class InsurancesComponent implements OnInit {
  public plans: Plan[];
  public editPlan: Plan;
  public deletePlan: Plan;
  

  constructor(private planService: PlanService, private router:Router ) { }

  ngOnInit() {
    this.getplans(); 
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

  public onAddPlan(addForm: NgForm): void {
    document?.getElementById('add-Plan-form')?.click();
    this.planService.addPlan(addForm.value).subscribe(
      (response: Plan) => {
        console.log(response);
        this.getplans();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdatePlan(plan: Plan): void {
    this.planService.updatePlan(plan).subscribe(
      (response: Plan) => {
        console.log(response);
        this.getplans();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeletePlan(planId: number): void {
    this.planService.deletePlan(planId).subscribe(
      (response: void) => {
        console.log(response);
        this.getplans();
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
    
    container.appendChild(button);
    button.click();
  }

  
  goToEnrollementPage(pageName:string):void{
    this.router.navigate(['/enrollement']);
    
  }



}
