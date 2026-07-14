package com.project.solemate.controller;

import com.project.solemate.model.Product;
import com.project.solemate.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.text.MessageFormat;
import java.util.List;

@CrossOrigin(origins = "${allowed.origin.url}")
@RestController
@RequestMapping("/api/product")
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

    @PostMapping(value = "/add", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<String> addProduct(@RequestPart Product product, @RequestPart MultipartFile imageFile) {
        try {
            Product savedProduct = service.addProduct(product, imageFile);

            return ResponseEntity.status(HttpStatus.CREATED).body(MessageFormat.format(
                    "Product ''{0}'' was successfully created with ID: {1}.",
                    savedProduct.getName(), savedProduct.getId()
            ));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(MessageFormat.format("Failed to add product ''{0}''. Reason: {1}",
                    product.getName(), e.getMessage()));
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

    @GetMapping("/search")
    public ResponseEntity<List<Product>> fetch(@RequestParam(name = "keyword", required = false, defaultValue = "") String keyword) {

        System.out.println("Searching: " + keyword);
        List<Product> products = service.findProducts(keyword);

        return ResponseEntity.ok(products);
    }

    @GetMapping
    public ResponseEntity<List<Product>> fetchAllProductsProduct() {
        return ResponseEntity.ok(service.fetchAllProducts());
    }

    @GetMapping("/{id}/image")
    public ResponseEntity<byte[]> getImageById(@PathVariable int id) {
        Product product = service.fetchProductsById(id);
        byte[] imageFile = product.getImageData();

        return ResponseEntity.ok().body(imageFile);
    }

    @PutMapping(value = "/{id}", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<String> updateProduct(@PathVariable int id, @RequestPart Product product, @RequestPart MultipartFile imageFile) {
        try {
            service.updateProduct(id, product, imageFile);
            return ResponseEntity.status(HttpStatus.OK).body(MessageFormat.format("Product with id: {0} was successfully updated.", id));

        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(MessageFormat.format("Failed to update. Product with id {0} not found. Reason: {1}", id, e.getMessage()));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(MessageFormat.format("Error updating product with id {0}. System error: {1}", id, e.getMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable int id) {
        try {
            service.deleteProduct(id);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(MessageFormat.format("Product with id: {0} was successfully deleted.", id));

        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(MessageFormat.format("Failed to delete. Product with id {0} not found. Reason: {1}", id, e.getMessage()));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(MessageFormat.format("Error deleting product with id {0}. System error: {1}", id, e.getMessage()));
        }
    }
}
