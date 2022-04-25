import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';
import { FooterComponent } from './composants/footer/footer.component';
import { ButtonActionComponent } from './caroussel/button-action.component';
import { DescriptionComponent } from './composants/description/description.component';
import { EnrollementComponent } from './composants/enrollement/enrollement.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InsurancesComponent } from './plans/insurances.component';
import { PlanService } from './plan.service';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InsurancesClientComponent } from './composants/insurances-client/insurances-client.component';
import { UserslistComponent } from './composants/userslist/userslist.component';
import { EnrollslistComponent } from './composants/enrollslist/enrollslist.component';
import { PageUserComponent } from './pages/page-user/page-user.component';
import { InsurancesUserComponent } from './composants/insurances-user/insurances-user.component';
import { HeaderWelcomeComponent } from './composants/header-welcome/header-welcome.component';
import { EnrollslistbyuserComponent } from './composants/enrollslistbyuser/enrollslistbyuser.component';


@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageAcceuilComponent,
    HeaderComponent,
    FooterComponent,
    ButtonActionComponent,
    DescriptionComponent,
    EnrollementComponent,
    InsurancesComponent,
    ContactComponent,
    DashboardComponent,
    InsurancesClientComponent,
    UserslistComponent,
    EnrollslistComponent,
    PageUserComponent,
    InsurancesUserComponent,
    HeaderWelcomeComponent,
    EnrollslistbyuserComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     FormsModule
  ],
  providers: [PlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
