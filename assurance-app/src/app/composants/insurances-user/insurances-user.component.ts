import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/plan';
import { PlanService } from 'src/app/plan.service';

@Component({
  selector: 'app-insurances-user',
  templateUrl: './insurances-user.component.html',
  styleUrls: ['./insurances-user.component.css']
})
export class InsurancesUserComponent implements OnInit {

  public plans: Plan[];
  constructor(private planService: PlanService , private router:Router) { }

  ngOnInit(): void {
    this.getplans(); 
  }

  
  public getplans(): void {
    this.planService.getPlans().subscribe(
      (response: Plan[]) => {
        this.plans = response;
        this.plans.forEach(i=>console.log(i.id));
        
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

  goToEnrollementPage(pageName:string,local : number):void{
    this.router.navigate(['/enrollement']);
    localStorage.setItem('plan_id',local.toString())
    console.log(localStorage)
  }

}
