import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponet } from '../componets/departments/DepartmentsComponet';
import { TimesheetComponet } from '../componets/timesheet/TimesheetComponet';
import { NgModule } from '@angular/core';
import { MaterialModule  } from './modules/material.module';

const routes: Routes = 
  const routes: Routes = [
    { path: '',   redirectTo: 'departments', pathMatch: 'full' },
    { path: 'departments', component: DepartmentsComponent },
    { path: 'timesheet', component: TimesheetComponent },
    { path: 'analytics', component: AnalyticsComponent }
];

@NgModule({
 
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }