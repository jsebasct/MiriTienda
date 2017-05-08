/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.store.miri.people.payroll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 *
 * @author jscruz
 */
@Component
public class ProductLoader implements CommandLineRunner {
    
    private final ProductRepository repository;
    
    @Autowired
    public ProductLoader(ProductRepository repository) {
        this.repository = repository;
    }
    
    @Override
    public void run(String... params) throws Exception{
        this.repository.save(new Product("Cereales CorniFlex", 24L, "OLXCE34"));
        this.repository.save(new Product("Zucaritas kullogs", 28L, "OPXCE38"));
    }
}
