import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  imports: [
    MatButtonModule,
    MatListModule,
    MatInputModule 
  ],
  exports: [
    MatButtonModule,
    MatListModule, 
    MatInputModule
  ]
})
export class MaterialModule { }
