package com.mingwandowski.soommateboot.repo.jpa;

import com.mingwandowski.soommateboot.model.jpa.JPAHome;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface JPAHomeRepo extends JpaRepository<JPAHome, Long> {

    Optional<JPAHome> findByHomeNameAndHomePassword(String homeName, String password);

    JPAHome findByHomeName(String homeName);
}
