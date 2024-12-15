package com.gift.website.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gift.website.Modal.User;
import com.gift.website.Repository.Userrepo;

@Service
public class UserService {
    @Autowired
    private Userrepo userRepository;

    public User postUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(int id) {
        return userRepository.findById(id);
    }
}
