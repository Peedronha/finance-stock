package br.com.juhmaran.usercontrol.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String zipCode;
    private String road;
    private String complement;
    private String neighborhood;
    private String city;
    private String state;

    @JsonIgnore
    @OneToOne
    private Users users;

}