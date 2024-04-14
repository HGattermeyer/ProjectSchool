import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  providers: [],
  exports: [
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class UsersMaterialModule { }
