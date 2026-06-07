package com.project.solemate.controller;

import com.project.solemate.model.Product;
import com.project.solemate.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SneakerController {

    @Autowired
    private ProductService sneaker;

    @GetMapping("/{id}")
    public Product fetchOneShoe(@PathVariable int id) {
        return sneaker.fetchOne(id);
    }

    @PostMapping
    public String addShoe(@RequestBody Product product) {
        return sneaker.addProduct(product);
    }

    @GetMapping("/category/{category}")
    public List<Product> fetchByCategory(@PathVariable String category) {
        return sneaker.fetchProductsByCategory(category);
    }

    @GetMapping("/brand/{brand}")
    public List<Product> fetchByBrand(@PathVariable String brand) {
        return sneaker.fetchProductsByBrand(brand);
    }

    @GetMapping("/status/{available}")
    public List<Product> fetchByAvailability(@PathVariable boolean available) {
        return sneaker.fetchProductsByAvailability(available);
    }

    @GetMapping
    public List<Product> fetchAllProduct(@PathVariable String category) {
        return sneaker.fetchAll();
    }

    @DeleteMapping("/{id}")
    public String deleteShoe(@PathVariable int id) {
        return sneaker.delete(id);
    }
}
