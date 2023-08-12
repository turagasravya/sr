package com.repository;

import java.util.Optional;
import java.util.function.BooleanSupplier;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

	
}
