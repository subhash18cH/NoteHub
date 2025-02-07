package com.subhash.backend.repository;

import com.subhash.backend.model.AppRole;
import com.subhash.backend.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByRoleName(AppRole appRole);

    boolean existsByRoleName(AppRole appRole);
}