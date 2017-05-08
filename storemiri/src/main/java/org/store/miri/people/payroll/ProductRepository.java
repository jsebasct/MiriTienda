/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.store.miri.people.payroll;

import org.springframework.data.repository.CrudRepository;
import org.store.miri.people.payroll.Product;

/**
 *
 * @author jscruz
 */
public interface ProductRepository extends CrudRepository<Product, Long> {
    
}
