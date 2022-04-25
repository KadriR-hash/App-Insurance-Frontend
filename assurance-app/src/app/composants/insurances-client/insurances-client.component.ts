import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/plan';
import { PlanService } from 'src/app/plan.service';

@Component({
  selector: 'app-insurances-client',
  templateUrl: './insurances-client.component.html',
  styleUrls: ['./insurances-client.component.css']
})
export class InsurancesClientComponent implements OnInit {

  public plans: Plan[];

  constructor(private planService: PlanService , private router:Router) { }

  ngOnInit(): void {
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


}
