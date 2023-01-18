package com.mingwandowski.soommateboot.service.impl;

import com.mingwandowski.soommateboot.model.Bid;
import com.mingwandowski.soommateboot.model.Home;
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
import java.util.stream.Collectors;

@Service
public class MongoMainServiceImpl extends ParentMainService implements MainService {

    @Autowired
    MongoHomeRepo homeRepo;

    @Autowired
    MongoBidRepo bidRepo;

    @Override
    public Map<String, Object> addHome(Home home) {
        Map<String, Object> result = new HashMap<>();
        MongoHome mongoHome = MongoHome.parseHome(home);
        if(home.getHomeName() == null || home.getHomeName().isEmpty()) {
            result.put(STATUS, FAILED);
            result.put(MSG, "please enter home name");
            return result;
        }
        MongoHome foundHome = homeRepo.findByHomeName(home.getHomeName());
        if(foundHome != null) {
            result.put(STATUS, FAILED);
            result.put(MSG, "already have a existing home with same name, please try another one");
            return result;
        }
        MongoHome newMongoDBHome = homeRepo.save(mongoHome);
        if(newMongoDBHome != null) {
            result.put(DATA, newMongoDBHome.parseToHome());
            result.put(STATUS, SUCCESS);
        } else {
            result.put(STATUS, FAILED);
            result.put(MSG, "save failed");
        }
        return result;
    }

    @Override
    public Map<String, Object> signInHome(String homeName, String password) {
        Map<String, Object> result = new HashMap<>();
        Optional<MongoHome> homeOpt = homeRepo.findByHomeNameAndHomePassword(homeName, password);
        if(homeOpt.isPresent()) {
            result.put(DATA, homeOpt.get().parseToHome());
            result.put(STATUS, SUCCESS);
        } else {
            result.put(STATUS, FAILED);
            result.put(MSG, "home name or password incorrect, please try again");
        }
        return result;
    }

    @Override
    public Map<String, Object> addBid(Bid bid) {
        Map<String, Object> result = new HashMap<>();
        MongoBid mongoBid = MongoBid.parseBid(bid);
        String homeName = mongoBid.getHomeName();
        MongoHome foundHome = homeRepo.findByHomeName(homeName);
        if(foundHome == null) {
            result.put(STATUS, FAILED);
            result.put(MSG, "error, please login again");
            return result;
        }
        List<MongoBid> mongoBids = bidRepo.findAllByHomeName(homeName);
        if(mongoBids.size() >= foundHome.getNumOfRooms()) {
            result.put(STATUS, FAILED);
            result.put(MSG, "sorry, no more rooms for a new roommate");
            return result;
        }
        MongoBid newBid = bidRepo.save(mongoBid);
        if(newBid != null) {
            result.put(DATA, newBid.parseToBid());
            result.put(STATUS, SUCCESS);
        } else {
            result.put(STATUS, FAILED);
            result.put(MSG, "add bid failed");
        }
        return result;
    }

    @Override
    public Map<String, Object> findBids(String homeName) {
        Map<String, Object> result = new HashMap<>();
        List<MongoBid> mongoBids = bidRepo.findAllByHomeName(homeName);
        if(mongoBids != null) {
            List<Bid> bids = mongoBids.stream().map(mongoBid -> mongoBid.parseToBid()).collect(Collectors.toList());
            result.put(DATA, bids);
            result.put(STATUS, SUCCESS);
        } else {
            result.put(STATUS, FAILED);
            result.put(MSG, "find bids error");
        }
        return result;
    }

    @Override
    public Map<String, Object> calculateResult(String homeName) {
        Map<String, Object> resultMap = new HashMap<>();
        List<MongoBid> mongoBidList = bidRepo.findAllByHomeName(homeName);
        List<Bid> bidList = mongoBidList.stream().map(mongoBid -> mongoBid.parseToBid()).collect(Collectors.toList());
        Home home = homeRepo.findByHomeName(homeName).parseToHome();

        calculate(resultMap, bidList, home);

        return resultMap;
    }
}
