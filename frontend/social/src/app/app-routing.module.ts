import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  {
      path: "",
      loadChildren: () => import('./main/main.module').then(mod => mod.MainModule),
    }
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes,
      {
            enableTracing: false
          }
      )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
