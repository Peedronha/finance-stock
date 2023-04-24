package br.com.juhmaran.stockmanagement.rest;

import br.com.juhmaran.stockmanagement.model.Stock;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/stock")
public class StockController {

    @GetMapping
    public ResponseEntity<Stock> getAll(Stock stock) {
        return ResponseEntity.ok(stock);
    }

}
