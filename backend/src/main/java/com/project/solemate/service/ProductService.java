package com.project.solemate.service;

import com.project.solemate.model.Product;
import com.project.solemate.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repo;


    public Product fetchOne(int prodID){
        return repo.findById(prodID).orElse(null);
    }

    public String addProduct(Product product){
        repo.save(product);
        return "Successfully Added";

    }

    public List<Product> fetchProductsByCategory(String category){
        return repo.findByCategoryIgnoreCase(category);
    }

    public List<Product> fetchProductsByBrand(String brand) {
        return repo.findByBrandIgnoreCase(brand);
    }

    public List<Product> fetchProductsByAvailability(boolean available) {
        return repo.findByAvailable(available);
    }

    public List<Product> fetchAll(){
        return repo.findAll();
    }

    public String delete(int prodID){
        repo.deleteById(prodID);
        return "Successfully Deleted";
    }
}
