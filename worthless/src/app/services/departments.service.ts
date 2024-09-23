import { Injectable } from '@angular/core';
import { Department } from '../interfaces/department';
import { Observable } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Department } from '../interfaces/department'

@Injectable({
   providedIn: 'root'
})
export class DepartmentService{
    departments: Department[] = [
{id: '1', name: 'Customer Success'},
{id: '2', name: 'Sales'},
{id: '3', name: 'Finance'},
];
constructor(
    private http: HttpClient
) { }
getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`https://hr-timesheet-test.firebaseio.com/departments.json`);
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
