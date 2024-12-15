package com.gift.website.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gift.website.Repository.Productrepo;
import com.gift.website.Modal.Product;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private Productrepo productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Integer id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(Integer id) {
        productRepository.deleteById(id);
    }
    
    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }
    public List<Product> desc()
    {
        return productRepository.desc();
    }
}
