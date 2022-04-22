import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [{
  path:'',
  component:DashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
