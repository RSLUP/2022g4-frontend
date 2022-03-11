import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
    {
        path:'',redirectTo:'home', pathMatch:'full'
    },
    {
        path:'',component:HomeComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'signup',component:SignupComponent
    },
    {
        path:'dashboard',component:DashboardComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[ RouterModule]
})
export class AppRoutingModule{}