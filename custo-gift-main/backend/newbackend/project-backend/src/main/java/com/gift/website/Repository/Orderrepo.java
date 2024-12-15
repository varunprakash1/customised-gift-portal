package com.gift.website.Repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gift.website.Modal.Order;

@Repository
public interface Orderrepo extends JpaRepository<Order, Integer> {
    List<Order> findByName(String name);
}
