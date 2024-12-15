package com.gift.website.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gift.website.Modal.Profile;
import com.gift.website.Repository.Profilerepo;
import java.util.*;
@Service
public class ProfileService {
@Autowired
Profilerepo r;
public Profile cust(int custid) {
    return r.findByCustId(custid);
}
public List<Profile> get()
{
    return r.findAll();
}
public Optional<Profile> getid(int id)
{
    return r.findById(id);
}
public Profile add(Profile p)
{
    return r.save(p);
}
}
