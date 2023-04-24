package br.com.juhmaran.usercontrol.service;

import br.com.juhmaran.usercontrol.database.AddressRepository;
import br.com.juhmaran.usercontrol.domain.Address;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AddressService {

    private final AddressRepository addressRepository;

    public Address saveAddress(Address address) {
        return addressRepository.save(address);
    }

    public Page<Address> addressAll(Pageable pageable) {
        return addressRepository.findAll(pageable);
    }

    public Object getAddressById(Long id) {
        return addressRepository.findById(id);
    }

    public void deleteAddressById(Long id) {
        addressRepository.deleteById(id);
    }


}
