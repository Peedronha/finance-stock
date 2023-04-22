package br.com.financeandstock.customer.framework.adapter.out.database;

import br.com.financeandstock.customer.domain.model.Contact;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends CrudRepository<Contact, Long> {
}
