import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JourneyFormComponent } from './journey-form.component';
import { FlightsBoardComponent } from './flights-board/flights-board.component';

const routes: Routes = [{
  path: '',
  title: 'JourneyForm',
  component: JourneyFormComponent,
  children: [
    {
      path: 'flights',
      component: FlightsBoardComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JourneyFormRoutingModule { }
