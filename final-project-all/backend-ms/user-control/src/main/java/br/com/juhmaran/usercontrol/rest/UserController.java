package br.com.juhmaran.usercontrol.rest;

import br.com.juhmaran.usercontrol.domain.Users;
import br.com.juhmaran.usercontrol.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping
    public ResponseEntity<Users> registerUser(@RequestBody(required = true) Users users) {
        var saveUser = userService.saveUser(users);
        return ResponseEntity.ok(saveUser);
    }

    @GetMapping
    public Page<Users> getAll(@PageableDefault(page = 0, size = 5) Pageable pageable) {
        return userService.userAll(pageable);
    }

    @GetMapping("/{id}")
    public Optional<Users> getUserById(@PathVariable(required = true) Long id) {
        return userService.getUserById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable(required = true) Long id) {
        return ResponseEntity.ok().build();
    }

}
