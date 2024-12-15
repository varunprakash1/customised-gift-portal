package com.gift.website.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gift.website.Modal.Profile;
import com.gift.website.service.ProfileService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/profile")
public class ProfileController {
       @Autowired
       ProfileService s;
@GetMapping
public List<Profile> get()
{
    return s.get();
}
@PostMapping
public Profile add(@RequestBody Profile p)
{
    return s.add(p);
}
@GetMapping("/id/{id}")
public Optional<Profile> getid(@PathVariable int id)
{
    return s.getid(id);
}
@GetMapping("/cust/{id}")
public ResponseEntity<Profile> getcust(@PathVariable int id) {
        Profile profile = s.cust(id);
        if (profile != null) {
            return ResponseEntity.ok(profile);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
@PutMapping("/{id}")
public Profile put(@RequestBody Profile p,@PathVariable int id)
{
    return s.add(p);
}
}

