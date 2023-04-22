package br.com.finalproject.financeandstock.application;

import br.com.finalproject.financeandstock.domain.model.Customer;
import br.com.finalproject.financeandstock.framework.adapter.out.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;
    private final PasswordEncoder passwordEncoder;

    public void getRegisterUser(Customer customer) {
        String hashPwd = passwordEncoder.encode(customer.getPassword());
        customer.setPassword(hashPwd);
        customer.setRegistrationDate(LocalDate.now());
        customerRepository.save(customer);
    }

    public Customer getCustomer(Authentication authentication) {
        List<Customer> customers = customerRepository
                .findByEmail(authentication.getName());
        if (!customers.isEmpty())
            return customers.get(0);
        return null;
    }

    public Page<Customer> findAll(PageRequest pageRequest) {
        return customerRepository.findAll(pageRequest);
    }
}
