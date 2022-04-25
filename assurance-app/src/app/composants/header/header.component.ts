import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { PlanService } from 'src/app/plan.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 

  constructor(private router:Router ) { }
  ngOnInit() {
    
  }



  goToLoginPage(pageName:string):void{
    this.router.navigate(['/login']);
  }
  goToHomePage(pageName:string):void{
    this.router.navigate(['']);
  }

  

}
