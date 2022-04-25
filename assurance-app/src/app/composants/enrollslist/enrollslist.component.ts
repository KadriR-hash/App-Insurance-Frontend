import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enrollement } from 'src/app/enrollement';
import { EnrollementService } from 'src/app/enrollement.service';
import { Plan } from 'src/app/plan';
import { RealEnrollement } from 'src/app/real-enrollement';
import { User } from 'src/app/user';

@Component({
  selector: 'app-enrollslist',
  templateUrl: './enrollslist.component.html',
  styleUrls: ['./enrollslist.component.css']
})
export class EnrollslistComponent implements OnInit {


  public enrols : RealEnrollement[];
  public plans : Plan[];
  public users : User[];

  constructor(private enrollementService : EnrollementService, private router:Router) { }

  ngOnInit(): void {
    this.getenrolls()
  }

   getenrolls(): void {
    this.enrollementService.getEnrolls().subscribe(
      (response: RealEnrollement[]) => {
        
        //Testing the undefined values of userc and planc
        this.enrols = response;
        this.enrols.forEach(i=>console.log(i?.planc?.provider));
        this.enrols.forEach(i=>console.log(i?.userc?.email));

        this.enrols?.forEach(i=>this.users?.forEach(j=>j=i?.userc));
        this.users?.forEach(i=>console.log(i?.email));

        this.enrols?.forEach(i=>this.plans?.forEach(j=>j=i?.planc));
        this.plans?.forEach(i=>console.log(i?.provider));

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}

function i(i: any, arg1: (j: any) => any) {
  throw new Error('Function not implemented.');
}

