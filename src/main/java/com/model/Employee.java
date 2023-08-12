package com.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int employeeId;
    
    private String name;
    
    // Corrected column name here
    //@Column(name = "mailid")
    private String mailid;
    
    private String role;
    private String category;
    private String gender;
    
    // Constructor
    public Employee() {}

    // Getters and Setters
    public int getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Corrected getter method name
    public String getMailid() {
        return mailid;
    }

    // Corrected setter method name
    public void setMailid(String mailid) {
        this.mailid = mailid;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
    
    @Override
    public String toString() {
        return "Employee{" +
                "employeeId=" + employeeId +
                ", name='" + name + '\'' +
                ", mailid='" + mailid + '\'' +
                ", role='" + role + '\'' +
                ", category='" + category + '\'' +
                ", gender='" + gender + '\'' +
                '}';
    }
}
