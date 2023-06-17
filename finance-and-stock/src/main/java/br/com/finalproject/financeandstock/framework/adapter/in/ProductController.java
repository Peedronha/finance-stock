package br.com.finalproject.financeandstock.framework.adapter.in;

import br.com.finalproject.financeandstock.application.ProductService;
import br.com.finalproject.financeandstock.domain.model.ProductModel;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;
    @GetMapping
    public Page<ProductModel> listProduct(
            @RequestParam(value = "page", defaultValue = "0") Integer page,
            @RequestParam(value = "size", defaultValue = "10") Integer size) {
        var sort = Sort.by(Sort.Direction.ASC, "name");
        var pageRequest = PageRequest.of(page, size, sort);
        return productService.findAll(pageRequest);
    }
}
