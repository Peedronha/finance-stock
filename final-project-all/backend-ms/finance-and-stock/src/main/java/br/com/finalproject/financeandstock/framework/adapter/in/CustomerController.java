package br.com.finalproject.financeandstock.framework.adapter.in;

import br.com.finalproject.financeandstock.application.CustomerService;
import br.com.finalproject.financeandstock.domain.model.Customer;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService customerService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody Customer customer) {
        try {
            customerService.getRegisterUser(customer);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body("Given user details are successfully registered");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An exception occurred due to " + e.getMessage());
        }

    }

    @GetMapping("/user")
    public Customer getUserDetailsAfterLogin(Authentication authentication) {
        return customerService.getCustomer(authentication);
    }

    @GetMapping
    public Page<Customer> listCustomer(
            @RequestParam(value = "page", defaultValue = "0") Integer page,
            @RequestParam(value = "size", defaultValue = "10") Integer size) {
        var sort = Sort.by(Sort.Direction.ASC, "name");
        var pageRequest = PageRequest.of(page, size, sort);
        return customerService.findAll(pageRequest);

    }

}
