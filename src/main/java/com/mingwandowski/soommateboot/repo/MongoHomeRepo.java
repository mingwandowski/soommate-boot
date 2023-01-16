package com.mingwandowski.soommateboot.repo;

import com.mingwandowski.soommateboot.model.mongo.MongoHome;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface MongoHomeRepo extends MongoRepository<MongoHome, String> {

    @Query("{name:'?0'}")
    MongoHome findItemByName(String name);
}
