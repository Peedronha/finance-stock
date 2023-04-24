package br.com.juhmaran.usercontrol.service;

import br.com.juhmaran.usercontrol.database.UserRepository;
import br.com.juhmaran.usercontrol.domain.Users;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public Page<Users> userAll(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    public Optional<Users> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public Users saveUser(Users users) {
        return userRepository.save(users);
    }

    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }

}
