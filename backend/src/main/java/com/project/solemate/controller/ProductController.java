package com.project.solemate.controller;

import com.project.solemate.model.Product;
import com.project.solemate.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") int id) {
        Product product = service.fetchProductsById(id);

        if (product == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(product);
        }
    }

    @PostMapping("/product")
    public ResponseEntity<?> addProduct(@RequestPart Product product, @RequestPart MultipartFile imageFile) {
        try {
            Product savedProduct = service.addProduct(product, imageFile);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping("/category/{category}")
    public List<Product> fetchByCategory(@PathVariable String category) {
        return service.fetchProductsByCategory(category);
    }

    @GetMapping("/brand/{brand}")
    public List<Product> fetchByBrand(@PathVariable String brand) {
        return service.fetchProductsByBrand(brand);
    }

    @GetMapping("/status/{available}")
    public List<Product> fetchByAvailability(@PathVariable boolean available) {
        return service.fetchProductsByAvailability(available);
    }

    @GetMapping
    public ResponseEntity<List<Product>> fetchAllProductsProduct() {
        return ResponseEntity.ok(service.fetchAllProducts());
    }

    @GetMapping("/{id}/image")
    public ResponseEntity<byte[]> getImageById(@PathVariable int id){
        Product product = service.fetchProductsById(id);
        byte[] imageFile = product.getImageData();
        
        return ResponseEntity.ok().body(imageFile);
    }

    @DeleteMapping("/{id}")
    public String deleteShoe(@PathVariable int id) {
        return service.delete(id);
    }
}
