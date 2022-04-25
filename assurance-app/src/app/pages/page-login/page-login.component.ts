import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  user = new User();
  users: User[];
  msg = '';
  userId: number;
  email_tmp: string;


  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit(): void {

  }


  signupUser() {
    this.service.signupUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received")
        /* this.router.navigate(['/login'])*/
      },
      error => {
        console.log("exception occured")
        this.msg = error.error
      }
    )

  }


  loginUser() {
    this.service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received")
        // Admins mail and psw are defined by default in my database (id =1)
        if (this.user.email == "root@gmail.com" && this.user.password == "rootroot") {
          this.router.navigate(['/admin']);
        }
        else {
          console.log(this.user.email);
          this.email_tmp = this.user.email;
          this.getusers();

          console.log(this.user.password);
          this.router.navigate(['/user']);




        }
      },
      error => {
        console.log("exception occured")
        this.msg = "Bad Credentials, please enter valid email and password :>!";
      }
    )
  }


  getusers(): void {
    this.service.getUsers().subscribe(
      (response: User[]) => {

        this.users = response;
        console.log(this.users);
        console.log(this.email_tmp);

        this.users.forEach(i => (i.email == this.email_tmp) ? this.goToUserPage('UserPage', i.id) : 'invalide');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }




  goToUserPage(pageName: string, local: number): void {

    localStorage.setItem('user_id', "" + local.toString())
    console.log(localStorage)
  }


  /*
  OnSubmiting(user : User):void{
  
    if(user.email =="root@gmail.com" && user.password =="root"){
      this.router.navigate(['/admin']);
    }
   
  
  }
  */

}
