package com.gift.website.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gift.website.Modal.Order;
import com.gift.website.Repository.Orderrepo;

@Service
public class OrderService {
    @Autowired
    Orderrepo r;

    public Order add(Order o) {
        return r.save(o);
    }

    public List<Order> get() {
        return r.findAll();
    }

    public List<Order> getName(String name) {
        return r.findByName(name);
    }
}
