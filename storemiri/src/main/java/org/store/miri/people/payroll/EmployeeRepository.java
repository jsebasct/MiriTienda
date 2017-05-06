/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.store.miri.people.payroll;

import org.springframework.data.repository.PagingAndSortingRepository;

/**
 *
 * @author jscruz
 */
//public interface EmployeeRepository extends CrudRepository<Employee, Long>{
//    
//}


public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long> {

}