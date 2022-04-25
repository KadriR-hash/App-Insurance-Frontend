import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plan } from './plan';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPlans(): Observable<Plan[]> {
    return this.http.get<Plan[]>(`${this.apiServerUrl}/plan/all`);
  }

  public addPlan(plan: Plan): Observable<Plan> {
    return this.http.post<Plan>(`${this.apiServerUrl}/plan/add`, plan);
  }

  public updatePlan(plan: Plan): Observable<Plan> {
    return this.http.put<Plan>(`${this.apiServerUrl}/plan/update`, plan);
  }

  public deletePlan(PlanId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/plan/delete/${PlanId}`);
  }
}
