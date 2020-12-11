import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

const imports = [
  MatButtonModule,
  MatInputModule,
  MatCardModule,
]

@NgModule({
  imports,
  exports: imports,
})
export class MaterialModule { }
