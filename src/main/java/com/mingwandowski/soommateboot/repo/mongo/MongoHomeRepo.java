package com.mingwandowski.soommateboot.repo.mongo;

import com.mingwandowski.soommateboot.model.mongo.MongoHome;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface MongoHomeRepo extends MongoRepository<MongoHome, String> {

    @Query("{name:'?0'}")
    MongoHome findItemByName(String name);

    @Query("{homeName: '?0', homePassword: '?1'}")
    Optional<MongoHome> findByHomeNameAndHomePassword(String homeName, String password);
}
