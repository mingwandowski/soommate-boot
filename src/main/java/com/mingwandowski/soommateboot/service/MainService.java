package com.mingwandowski.soommateboot.service;

import com.mingwandowski.soommateboot.model.Bid;
import com.mingwandowski.soommateboot.model.Home;
import com.mingwandowski.soommateboot.repo.HomeRepo;
import com.mingwandowski.soommateboot.repo.BidRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class MainService {

    public static final String DATA = "data";
    public static final String STATUS = "status";
    public static final String SUCCESS = "success";
    public static final String FAILED = "failed";

    @Autowired
    HomeRepo homeRepo;

    @Autowired
    BidRepo bidRepo;

    public Map<String, Object> addHome(Home home) {
        Map<String, Object> result = new HashMap<>();
        Home newHome = homeRepo.save(home);
        if(newHome != null) {
            result.put(DATA, newHome);
            result.put(STATUS, SUCCESS);
        } else {
            result.put(STATUS, FAILED);
        }
        return result;
    }

    public Map<String, Object> signInHome(String homeName, String password) {
        Map<String, Object> result = new HashMap<>();
        Optional<Home> homeOpt = homeRepo.findByHomeNameAndHomePassword(homeName, password);
        if(homeOpt.isPresent()) {
            result.put(DATA, homeOpt.get());
            result.put(STATUS, SUCCESS);
        } else {
            result.put(STATUS, FAILED);
        }
        return result;
    }

    public Map<String, Object> addBid(Bid bid) {
        Map<String, Object> result = new HashMap<>();
        Bid newBid = bidRepo.save(bid);
        if(newBid != null) {
            result.put(DATA, newBid);
            result.put(STATUS, SUCCESS);
        } else {
            result.put(STATUS, FAILED);
        }
        return result;
    }

    public Map<String, Object> findBids(String homeName) {
        Map<String, Object> result = new HashMap<>();
        List<Bid> bids = bidRepo.findAllByHomeName(homeName);
        if(bids != null) {
            result.put(DATA, bids);
            result.put(STATUS, SUCCESS);
        } else {
            result.put(STATUS, FAILED);
        }
        return result;
    }
}
