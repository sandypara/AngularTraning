import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './Components/create-user/create-user.component';
import { HomePageComponent } from './Components/home-page/home-page.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'createuser', component: CreateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
