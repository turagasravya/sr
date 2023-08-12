import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router'; // Don't forget to import Router

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      employees => {
        this.employees = employees;
      },
      error => {
        console.error('Error fetching employees:', error);
      }
    );
  }
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }
  updateEmployee(employeeId: number) {
    this.router.navigate(['update-employee', employeeId]);
  }
  deleteEmployee(employeeId: number){
    this.employeeService.deleteEmployee(employeeId).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
  private getEmployees(){
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    });
  }

}
