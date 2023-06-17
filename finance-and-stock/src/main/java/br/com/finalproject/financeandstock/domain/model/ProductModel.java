package br.com.finalproject.financeandstock.domain.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
public class ProductModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long productId;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "number", nullable = false)
    private int number;

    @Column(name = "price", nullable = false)
    private float price;

    @Column(name = "quantity_in_stock", nullable = false)
    private int quantityInStock;

    @Column(name = "packing_volume", nullable = false)
    private String packingVolume;

    @Column(name = "registration_date")
    private LocalDate registrationDate = LocalDate.now();

    public ProductModel(String description, int number, float price, int quantityInStock,
                   String packingVolume) {
        this.description = description;
        this.number = number;
        this.price = price;
        this.quantityInStock = quantityInStock;
        this.packingVolume = packingVolume;
    }
}
