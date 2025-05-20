import { Routes } from '@angular/router';
import { DynamicBrandComponent } from './dynamic-brand/dynamic-brand.component';

export const routes: Routes = [
  { path: ':brand', component: DynamicBrandComponent },

  { path: ':brand/:id', component: DynamicBrandComponent },
];
