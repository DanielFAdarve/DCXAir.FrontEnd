import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  title: 'Layout',
  loadChildren: () =>
    import('./modules/journey-form/journey-form.module').then((m) => m.JourneyFormModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
