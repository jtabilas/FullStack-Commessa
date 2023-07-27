import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewComessaComponent } from './components/view-comessa/view-comessa.component';
import { AddCommessaComponent } from './components/add-commessa/add-commessa.component';
import { EditCommessaComponent } from './components/edit-commessa/edit-commessa.component';

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path:'Home', component:HomeComponent},
  {path:'ViewCommessa/:id', component:ViewComessaComponent},
  {path:'AddCommessa', component:AddCommessaComponent},
  {path:'EditCommessa/:id', component:EditCommessaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
