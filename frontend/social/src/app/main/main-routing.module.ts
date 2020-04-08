import { AuthGuard } from './../auth-guard/auth.guard';
import { MainComponent } from './main.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
      path: 'main',
      component: MainComponent,
      canActivateChild: [AuthGuard],
  },
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
