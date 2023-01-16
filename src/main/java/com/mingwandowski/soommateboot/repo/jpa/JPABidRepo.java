package com.mingwandowski.soommateboot.repo.jpa;

import com.mingwandowski.soommateboot.model.BidBody;
import com.mingwandowski.soommateboot.model.jpa.JPABid;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JPABidRepo extends JpaRepository<JPABid, Long> {

    List<JPABid> findAllByHomeName(String homeName);
}
