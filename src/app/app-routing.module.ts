import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './about-me/home/home.component';
import { MyInfoComponent } from './about-me/my-info/my-info.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'AboutMe/MyInfo',component:MyInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
