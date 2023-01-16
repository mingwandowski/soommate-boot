package com.mingwandowski.soommateboot.service.impl;

import com.mingwandowski.soommateboot.model.BidBody;
import com.mingwandowski.soommateboot.model.HomeBody;
import com.mingwandowski.soommateboot.model.mongo.MongoBid;
import com.mingwandowski.soommateboot.model.mongo.MongoHome;
import com.mingwandowski.soommateboot.repo.mongo.MongoBidRepo;
import com.mingwandowski.soommateboot.repo.mongo.MongoHomeRepo;
import com.mingwandowski.soommateboot.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class MongoMainServiceImpl implements MainService {

    @Autowired
    MongoHomeRepo homeRepo;

    @Autowired
    MongoBidRepo bidRepo;

    @Override
    public Map<String, Object> addHome(HomeBody home) {
        Map<String, Object> result = new HashMap<>();
        MongoHome mongoHome = MongoHome.parseHome(home);
        MongoHome newMongoDBHome = homeRepo.save(mongoHome);
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
        Map<String, Object> result = new HashMap<>();
        Optional<MongoHome> homeOpt = homeRepo.findByHomeNameAndHomePassword(homeName, password);
        if(homeOpt.isPresent()) {
            result.put(DATA, homeOpt.get());
            result.put(STATUS, SUCCESS);
        } else {
            result.put(STATUS, FAILED);
        }
        return result;
    }

    @Override
    public Map<String, Object> addBid(BidBody bid) {
        Map<String, Object> result = new HashMap<>();
        MongoBid mongoBid = MongoBid.parseBid(bid);
        MongoBid newBid = bidRepo.save(mongoBid);
        if(newBid != null) {
            result.put(DATA, newBid);
            result.put(STATUS, SUCCESS);
        } else {
            result.put(STATUS, FAILED);
        }
        return result;
    }

    @Override
    public Map<String, Object> findBids(String homeName) {
        Map<String, Object> result = new HashMap<>();
        List<MongoBid> bids = bidRepo.findAllByHomeName(homeName);
        if(bids != null) {
            result.put(DATA, bids);
            result.put(STATUS, SUCCESS);
        } else {
            result.put(STATUS, FAILED);
        }
        return result;
    }

    @Override
    public Map<String, Object> calculateResult(String homeName) {
        return null;
    }
}
