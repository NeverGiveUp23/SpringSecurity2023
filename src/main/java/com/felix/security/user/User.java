package com.felix.security.user;

import com.felix.security.budget.Budget;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

// @Data is lombok creating the boilerplate code for us when it comes to getters and setters
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_user")
public class User implements UserDetails {
    @Id
    @GeneratedValue
    private Integer id;
    private String firstname;
    private String lastname;
    private String email;
    private String password;

//    String will take value of enum
    @Enumerated(EnumType.STRING)
    private Role role;
    @OneToMany(mappedBy = "_user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Budget> budgets;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
//        role is referring to the role above
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    public User createAdmin(String firstname, String lastname, String email, String password){
        User admin = new User();

        admin.setFirstname(firstname);
        admin.setLastname(lastname);
        admin.setEmail(email);
        admin.setPassword(password);
        admin.setRole(Role.ADMIN);
        return admin;
    }



    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
