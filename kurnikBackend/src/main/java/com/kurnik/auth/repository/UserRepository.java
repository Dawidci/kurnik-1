package com.kurnik.auth.repository;

import com.kurnik.auth.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    User findByUsername(String userName);
    Boolean existsByUsername(String username);
}
