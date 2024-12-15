package com.gift.website.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.gift.website.Modal.Order;
import com.gift.website.service.OrderService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {
    @Autowired
    OrderService s;

    @GetMapping("/order")
    public List<Order> get() {
        return s.get();
    }

    @PostMapping("/order")
    public Order add(@RequestBody Order o) {
        return s.add(o);
    }

    @GetMapping("/order/{name}")
    public List<Order> li(@PathVariable String name) {
        return s.getName(name);
    }
}
