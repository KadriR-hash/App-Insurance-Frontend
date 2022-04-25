import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';
import { Role } from 'src/app/role';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  
  public users : User[];
  public Simpleuser : Role;

  constructor(private registrationService : RegistrationService , private router:Router) { }

  ngOnInit(): void {
    this.getusers()
  }

  public getusers(): void {
    this.registrationService.getUsers().subscribe(
      (response: User[]) => {

        this.users = response;
        console.log(this.users);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
