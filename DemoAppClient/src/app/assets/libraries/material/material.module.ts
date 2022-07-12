import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';


@NgModule({
  imports: [MatButtonModule, MatListModule],
  exports: [MatButtonModule, MatListModule]
})
export class MaterialModule { }
