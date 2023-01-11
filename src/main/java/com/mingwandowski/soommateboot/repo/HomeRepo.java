package com.mingwandowski.soommateboot.repo;

import com.mingwandowski.soommateboot.model.Home;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HomeRepo extends JpaRepository<Home, Long> {

    Optional<Home> findByHomeNameAndHomePassword(String homeName, String password);
}
