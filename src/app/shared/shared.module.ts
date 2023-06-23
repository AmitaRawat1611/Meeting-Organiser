import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { ErrorComponent } from './error/error.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
  },
];
@NgModule({
  declarations: [HeaderComponent, ErrorComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
