import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './composants/description/description.component';
import { EnrollementComponent } from './composants/enrollement/enrollement.component';
import { EnrollslistComponent } from './composants/enrollslist/enrollslist.component';
import { EnrollslistbyuserComponent } from './composants/enrollslistbyuser/enrollslistbyuser.component';
import { UserslistComponent } from './composants/userslist/userslist.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';

import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageUserComponent } from './pages/page-user/page-user.component';
import { InsurancesComponent } from './plans/insurances.component';

const routes: Routes = [
  { path: '', component: PageAcceuilComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'about', component: DescriptionComponent },
  { path: 'enrollement', component: EnrollementComponent },
  { path: 'plans', component: InsurancesComponent} ,
  { path: 'contact', component: ContactComponent},
  { path: 'admin', component: DashboardComponent},
  { path: 'userslist', component:UserslistComponent},
  { path: 'enrollslist', component:EnrollslistComponent},
  { path: 'user', component:PageUserComponent},
  { path: 'enrollslistbyuser', component:EnrollslistbyuserComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
