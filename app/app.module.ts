// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeService } from './employee.service';
import { AppRoutingModule } from './app-routing.module';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [AppComponent,
    EmployeeListComponent,
     CreateEmployeeComponent,
     UpdateEmployeeComponent,
     EmployeeDetailsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'create-employee', component: CreateEmployeeComponent }
      // Add other routes as needed
    ])
  ],
  // app.module.ts
providers: [EmployeeService],

  
  bootstrap: [AppComponent]
})
export class AppModule {}
