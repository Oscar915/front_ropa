import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { PublicModule } from './public/public.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    PublicModule,
    AdminModule,
    AuthModule,
    ClientModule
  ]
})
export class FeatureModule { }
