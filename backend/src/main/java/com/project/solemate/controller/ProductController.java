package com.project.solemate.controller;

import com.project.solemate.model.Product;
import com.project.solemate.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService sneaker;

    @GetMapping("/{id}")
    public ResponseEntity<Product> fetchOneShoe(@PathVariable("id") int id) {
        Product product = sneaker.fetchOne(id);

        if (product == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(product);
        }
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
    public ResponseEntity<List<Product>> fetchAllProduct() {
        return new ResponseEntity<>(sneaker.fetchAll(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public String deleteShoe(@PathVariable int id) {
        return sneaker.delete(id);
    }
}
