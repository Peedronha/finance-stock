package br.com.finalproject.financeandstock.application;

import br.com.finalproject.financeandstock.domain.model.ProductModel;
import br.com.finalproject.financeandstock.domain.model.UserModel;
import br.com.finalproject.financeandstock.framework.adapter.out.CustomerRepository;
import br.com.finalproject.financeandstock.framework.adapter.out.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;
    public Page<ProductModel> findAll(PageRequest pageRequest) {
        return productRepository.findAll(pageRequest);
    }

}
