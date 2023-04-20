package br.com.financeandstock.customer.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Accounts {

    @Id
    private long accountNumber;
    private int customerId;
    private String accountType;
    private String branchAddress;
    private String createDt;

}
