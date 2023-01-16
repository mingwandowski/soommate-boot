package com.mingwandowski.soommateboot.repo.mongo;

import com.mingwandowski.soommateboot.model.mongo.MongoBid;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface MongoBidRepo extends MongoRepository<MongoBid, String> {

    @Query("{homeName:'?0'}")
    List<MongoBid> findAllByHomeName(String homeName);
}
