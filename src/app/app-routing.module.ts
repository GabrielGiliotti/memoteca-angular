import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { MuralComponent } from './components/mural/mural.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { UpdateModalComponent } from './components/update-modal/update-modal.component';

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
  },
  {
    path: 'delete-modal/:id',
    component: DeleteModalComponent
  },
  {
    path: 'update-modal/:id',
    component: UpdateModalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
