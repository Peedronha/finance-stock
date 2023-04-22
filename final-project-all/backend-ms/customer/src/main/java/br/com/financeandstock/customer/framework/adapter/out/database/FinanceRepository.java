package br.com.financeandstock.customer.framework.adapter.out.database;

import br.com.financeandstock.customer.domain.model.Finance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FinanceRepository extends JpaRepository<Finance, Long> {
}
