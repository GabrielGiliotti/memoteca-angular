import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { MuralComponent } from './components/mural/mural.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { UpdateModalComponent } from './components/update-modal/update-modal.component';
import { CustomReuseStrategy } from './routing/custom-reuse-strategy';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mural',
    pathMatch: 'full'
  },
  {
    path: 'create-item',
    component: FormComponent
  },
  {
    path: 'mural',
    component: MuralComponent,
    data: {
      reuseComponent: true
    }
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
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [{provide: RouteReuseStrategy, useClass: CustomReuseStrategy}]
})
export class AppRoutingModule { }
