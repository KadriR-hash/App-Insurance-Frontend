import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enrollement } from './enrollement';
import { RealEnrollement } from './real-enrollement';
@Injectable({
  providedIn: 'root'
})
export class EnrollementService {

  constructor(private http: HttpClient) { }

  public getEnrolls(): Observable<RealEnrollement[]> {
    return this.http.get<RealEnrollement[]>("http://localhost:8010/allEnrolls");
  }


  /* we pass on an enrollement request and return back an enrollement (coté back)*/
  
  public addEnrolls(enrollement: Enrollement): Observable<RealEnrollement> {
    return this.http.post<RealEnrollement>("http://localhost:8010/addEnroll", enrollement);
  }


}
