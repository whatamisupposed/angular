import { Component, Oninit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { Observable } from 'rxjs';
import { Department } from 'src/app/interfaces/department';
import { Router } from @angular/router

@Component({
    selecter: 'app-departments',
    templateURL: './departments.component.html'
    styleUrls: ['./departments.component.scss']
})
export class DepartmentService implements Oninit{

    departments: Department[] | undefined;
    $departments: Observable<Department[]> | undefined;

    constructor(
        private departmentsService: DepartmentsService,
        private router: Router,
    ) { }
    ngOnInit(): void {
    //    this.departmentsService.getDepartments().subscribe(departments => {
   //         this.departments = departments;
     //   });

     this.$departments = this.departmentsService.getDepartments();
    }
    goToDepartment(departmentId: string): void {
        this.router.navigate(['./timesheet', {id: departmentId}]);
    }
}


export class DepartmentService implements Oninit{
 
    constructor(
        private departmentsService: DepartmentsService,
    ) { }
    ngOnInit(): void {
        this departments = this.departmentsService.departments;
    }
}
export interface Department {
    id: string;
    name: string;
}
departments: Department[] = [
    {id: '1', name: 'Customer Success'},
    {id: '2', name: 'Sales'},
    {id: '3', name: 'Finance'},
];