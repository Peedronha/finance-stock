package br.com.juhmaran.usercontrol.database;

import br.com.juhmaran.usercontrol.domain.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

    Optional<Address> findByZipCode(String cep);

}
