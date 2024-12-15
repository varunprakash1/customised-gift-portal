package com.gift.website.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gift.website.Modal.Profile;

@Repository
public interface Profilerepo extends JpaRepository<Profile,Integer>{

   
    
        @Query(value = "SELECT * FROM profile WHERE cust_id = :custid", nativeQuery = true)
        Profile findByCustId(@Param("custid") Integer custid);
    
    
} 
