package br.com.financeandstock.customer.framework.adapter.in.event;

import br.com.financeandstock.customer.domain.model.Customer;
import br.com.financeandstock.customer.framework.adapter.out.database.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class LoginController {

    private final CustomerRepository customerRepository;

    @GetMapping
    public Customer getUserDetailsAfterLogin(Authentication authentication) {
        List<Customer> customers = customerRepository.findByEmail(authentication.getName());
        if (customers.size() > 0) {
            return customers.get(0);
        } else {
            return null;
        }

    }

}
