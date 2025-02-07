package com.subhash.backend.utils;


import com.subhash.backend.model.AppRole;
import com.subhash.backend.model.Role;
import com.subhash.backend.repository.RoleRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RoleInitializer {

    @Autowired
    private RoleRepository roleRepository;

    @PostConstruct
    public void initializeRoles() {
        // Create default roles if they don't exist
        if (!roleRepository.existsByRoleName(AppRole.ROLE_USER)) {
            Role userRole = new Role();
            userRole.setRoleName(AppRole.ROLE_USER);
            roleRepository.save(userRole);
        }

        if (!roleRepository.existsByRoleName(AppRole.ROLE_ADMIN)) {
            Role adminRole = new Role();
            adminRole.setRoleName(AppRole.ROLE_ADMIN);
            roleRepository.save(adminRole);
        }
    }
}
