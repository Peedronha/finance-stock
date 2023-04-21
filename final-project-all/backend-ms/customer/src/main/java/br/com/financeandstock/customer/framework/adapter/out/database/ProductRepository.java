package br.com.financeandstock.customer.framework.adapter.out.database;

import br.com.financeandstock.customer.domain.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
