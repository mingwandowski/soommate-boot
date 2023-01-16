package com.mingwandowski.soommateboot.repo;

import com.mingwandowski.soommateboot.model.jpa.JPAHome;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HomeRepo extends JpaRepository<JPAHome, Long> {

    Optional<JPAHome> findByHomeNameAndHomePassword(String homeName, String password);

    JPAHome findByHomeName(String homeName);
}
