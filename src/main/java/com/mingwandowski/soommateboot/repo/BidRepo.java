package com.mingwandowski.soommateboot.repo;

import com.mingwandowski.soommateboot.model.Bid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BidRepo extends JpaRepository<Bid, Long> {

    List<Bid> findAllByHomeName(String homeName);
}
