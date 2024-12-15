package com.gift.website.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.gift.website.Modal.Product;

public interface Productrepo extends JpaRepository<Product,Integer>{
    List<Product> findByCategory(String category);
    @Query(value = "SELECT * FROM Product ORDER BY CAST(price AS DECIMAL) DESC", nativeQuery = true)
    List<Product> desc();
} 
