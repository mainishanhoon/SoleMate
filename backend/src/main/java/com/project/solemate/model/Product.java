package com.project.solemate.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    private String name;
    private String description;
    private String brand;
    private BigDecimal price;
    private String category;
    private boolean available;
    private int quantity;
    private Date releaseDate;

    @Lob
    @Column(name = "image_data", columnDefinition = "bytea")
    private byte[] imageData;
    private String imageName;
    private String imageType;
}
