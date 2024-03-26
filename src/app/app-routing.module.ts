import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { MuralComponent } from './components/mural/mural.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create-item',
    pathMatch: 'full'
  },
  {
    path: 'create-item',
    component: FormComponent
  },
  {
    path: 'mural',
    component: MuralComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
