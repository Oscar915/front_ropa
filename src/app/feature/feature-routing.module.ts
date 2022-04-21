import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  children:[
    {
      path:'',
      loadChildren: ()=> import('src/app/feature/public/public.module').then(m=>m.PublicModule)
    },
    {
      path:'',
      loadChildren: ()=> import('src/app/feature/auth/auth-routing.module').then(m=>m.AuthRoutingModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
