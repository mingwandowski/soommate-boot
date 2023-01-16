package com.mingwandowski.soommateboot.service.impl;

import com.mingwandowski.soommateboot.model.Bid;
import com.mingwandowski.soommateboot.model.HomeBody;
import com.mingwandowski.soommateboot.model.mongo.MongoHome;
import com.mingwandowski.soommateboot.repo.mongo.MongoHomeRepo;
import com.mingwandowski.soommateboot.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class MongoMainServiceImpl implements MainService {

    @Autowired
    MongoHomeRepo mongoHomeRepo;

    @Override
    public Map<String, Object> addHome(HomeBody home) {
        Map<String, Object> result = new HashMap<>();
        MongoHome mongoHome = MongoHome.parseHome(home);
        MongoHome newMongoDBHome = mongoHomeRepo.save(mongoHome);
        if(newMongoDBHome != null) {
            result.put(DATA, newMongoDBHome);
            result.put(STATUS, SUCCESS);
        } else {
            result.put(STATUS, FAILED);
        }
        return result;
    }

    @Override
    public Map<String, Object> signInHome(String homeName, String password) {
        return null;
    }

    @Override
    public Map<String, Object> addBid(Bid bid) {
        return null;
    }

    @Override
    public Map<String, Object> findBids(String homeName) {
        return null;
    }

    @Override
    public Map<String, Object> calculateResult(String homeName) {
        return null;
    }
}
