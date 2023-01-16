package com.mingwandowski.soommateboot.repo.jpa;

import com.mingwandowski.soommateboot.model.Bid;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JPABidRepo extends JpaRepository<Bid, Long> {

    List<Bid> findAllByHomeName(String homeName);
}
