package com.project.solemate.service;

import com.project.solemate.model.Product;
import com.project.solemate.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repo;


    public Product fetchProductsById(int prodID) {
        return repo.findById(prodID).orElse(null);
    }

    public Product addProduct(Product product, MultipartFile imageFile) throws IOException {
        product.setImageName(imageFile.getOriginalFilename());
        product.setImageType(imageFile.getContentType());
        product.setImageData(imageFile.getBytes());

        return repo.save(product);
    }

    public List<Product> fetchProductsByCategory(String category) {
        return repo.findByCategoryIgnoreCase(category);
    }

    public List<Product> fetchProductsByBrand(String brand) {
        return repo.findByBrandIgnoreCase(brand);
    }

    public List<Product> fetchProductsByAvailability(boolean available) {
        return repo.findByAvailable(available);
    }

    public List<Product> fetchAllProducts() {
        return repo.findAll();
    }

    public String delete(int prodID) {
        repo.deleteById(prodID);
        return "Successfully Deleted";
    }
}
