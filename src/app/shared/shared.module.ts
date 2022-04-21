import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NofoundComponent } from './nofound/nofound.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';



@NgModule({
  declarations: [
    NofoundComponent
  ],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule
  ],
  exports: [
    CommonModule,
    NbThemeModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NofoundComponent
  ],
})
export class SharedModule { }
