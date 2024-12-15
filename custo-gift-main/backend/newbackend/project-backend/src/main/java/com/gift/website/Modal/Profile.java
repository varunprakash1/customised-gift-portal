package com.gift.website.Modal;

import jakarta.persistence.*;

@Table(name="profile")
@Entity

public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String  name;
    private String lastname;
    private String address;
    private String email;
    private String password; 
    private String url;
    private Integer custId;
    public Profile(int id, String name, String lastname, String address, String email, String password, String url,
            Integer custId) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.address = address;
        this.email = email;
        this.password = password;
        this.url = url;
        this.custId = custId;
    }
    public Integer getCustId() {
        return custId;
    }
    public void setCustId(Integer custId) {
        this.custId = custId;
    }
    public String getUrl() {
        return url;
    }
    public void setUrl(String url) {
        this.url = url;
    }


 
  
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
 
 public String getPassword() {
    return password;
}
public void setPassword(String password) {
    this.password = password;
}
   public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getLastname() {
        return lastname;
    }
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
   
  
    public Profile() {
    }
}

