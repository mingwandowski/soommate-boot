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
            return failedResult(result, "please enter home name");
        }
        MongoHome foundHome = homeRepo.findByHomeName(home.getHomeName());
        if(foundHome != null) {
            return failedResult(result, "already have a existing home with same name, please try another one");
        }
        if(foundHome.getHomePassword() == null || foundHome.getHomePassword().isEmpty()) {
            return failedResult(result, "should have a password");
        }
        MongoHome newMongoDBHome = homeRepo.save(mongoHome);
        if(newMongoDBHome != null) {
            result.put(DATA, newMongoDBHome.parseToHome());
            result.put(STATUS, SUCCESS);
        } else {
            return failedResult(result, "save failed");
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
            return failedResult(result, "home name or password incorrect, please try again");
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
            return failedResult(result, "error, please login again");
        }
        List<MongoBid> mongoBids = bidRepo.findAllByHomeName(homeName);
        if(mongoBids.size() >= foundHome.getNumOfRooms()) {
            return failedResult(result, "sorry, no more rooms for a new roommate");
        }
        MongoBid newBid = bidRepo.save(mongoBid);
        if(newBid != null) {
            result.put(DATA, newBid.parseToBid());
            result.put(STATUS, SUCCESS);
        } else {
            return failedResult(result, "add bid failed");
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
            return failedResult(result, "find bids error");
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

    private Map<String, Object> failedResult(Map<String, Object> result, String massage) {
        result.put(STATUS, FAILED);
        result.put(MSG, massage);
        return result;
    }
}
