import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-welcome',
  templateUrl: './header-welcome.component.html',
  styleUrls: ['./header-welcome.component.css']
})
export class HeaderWelcomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToLoginPage(pageName:string):void{
    this.router.navigate(['/login']);
  }
  goToHomePage(pageName:string):void{
    this.router.navigate(['']);
  }


}
