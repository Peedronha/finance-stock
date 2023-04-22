package br.com.finalproject.financeandstock;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableWebSecurity(debug = true)
public class FinanceAndStockApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinanceAndStockApplication.class, args);
	}

}
