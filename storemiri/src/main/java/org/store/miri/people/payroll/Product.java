/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.store.miri.people.payroll;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Data;

/**
 *
 * @author jscruz
 */
@Data
@Entity
public class Product {
    private @Id @GeneratedValue Long id;
    private String name;
    private Long price;
    private String barCode;
    
    public Product() {
        
    }
    
    public Product(String name, Long price, String barCode) {
        this.name = name;
        this.price = price;
        this.barCode = barCode;
    }
}
