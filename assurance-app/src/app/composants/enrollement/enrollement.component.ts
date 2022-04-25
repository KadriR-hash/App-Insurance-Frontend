import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Enrollement } from 'src/app/enrollement';
import { EnrollementService } from 'src/app/enrollement.service';
import { RealEnrollement } from 'src/app/real-enrollement';

@Component({
  selector: 'app-enrollement',
  templateUrl: './enrollement.component.html',
  styleUrls: ['./enrollement.component.css']
})
export class EnrollementComponent implements OnInit {

  enrollement = new Enrollement();

  constructor(private service: EnrollementService, private router: Router) { }

  ngOnInit(): void {
    console.log(localStorage)
    const userID = localStorage.getItem('user_id');
    this.enrollement.userc = Number(userID);
    const planID = localStorage.getItem('plan_id');
    this.enrollement.planc = Number(planID);
    console.log(this.enrollement.userc)
    console.log(this.enrollement.planc)

  }



  addEnrollement(): void {
    this.service.addEnrolls(this.enrollement).subscribe(
      
      data => {
        console.log("response received")

      },
      error => {
        console.log("exception occured")

        //Testing input values
        console.log(this.enrollement.date)
        console.log(this.enrollement.telenum)
        console.log(this.enrollement.adrrs)
        console.log(this.enrollement.userc)
        console.log(this.enrollement.planc)


      }
    )
  }




}
