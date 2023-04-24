package br.com.juhmaran.stockmanagement.model;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class Stock {

    private Long stockId;
    private String name;
    private LocalDate registrationDate;

}
