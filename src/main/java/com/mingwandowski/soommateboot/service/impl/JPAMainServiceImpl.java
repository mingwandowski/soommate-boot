package com.mingwandowski.soommateboot.service.impl;

import com.mingwandowski.soommateboot.model.Bid;
import com.mingwandowski.soommateboot.model.Home;
import com.mingwandowski.soommateboot.model.jpa.JPABid;
import com.mingwandowski.soommateboot.model.jpa.JPAHome;
import com.mingwandowski.soommateboot.repo.jpa.JPAHomeRepo;
import com.mingwandowski.soommateboot.repo.jpa.JPABidRepo;
import com.mingwandowski.soommateboot.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class JPAMainServiceImpl extends ParentMainService implements MainService {

    @Autowired
    JPAHomeRepo homeRepo;

    @Autowired
    JPABidRepo bidRepo;

    public Map<String, Object> addHome(Home home) {
        Map<String, Object> result = new HashMap<>();
        JPAHome jpaHome = JPAHome.parseHome(home);
        JPAHome newJPAHome = homeRepo.save(jpaHome);
        if(newJPAHome != null) {
            result.put(DATA, newJPAHome.parseToHome());
            result.put(STATUS, SUCCESS);
        } else {
            result.put(STATUS, FAILED);
        }
        return result;
    }

    public Map<String, Object> signInHome(String homeName, String password) {
        Map<String, Object> result = new HashMap<>();
        Optional<JPAHome> homeOpt = homeRepo.findByHomeNameAndHomePassword(homeName, password);
        if(homeOpt.isPresent()) {
            result.put(DATA, homeOpt.get().parseToHome());
            result.put(STATUS, SUCCESS);
        } else {
            result.put(STATUS, FAILED);
        }
        return result;
    }

    public Map<String, Object> addBid(Bid bid) {
        Map<String, Object> result = new HashMap<>();
        JPABid jpaBid = JPABid.parseBid(bid);
        JPABid newBid = bidRepo.save(jpaBid);
        if(newBid != null) {
            result.put(DATA, newBid.parseToBid());
            result.put(STATUS, SUCCESS);
        } else {
            result.put(STATUS, FAILED);
        }
        return result;
    }

    public Map<String, Object> findBids(String homeName) {
        Map<String, Object> result = new HashMap<>();
        List<JPABid> jpaBids = bidRepo.findAllByHomeName(homeName);
        if(jpaBids != null) {
            List<Bid> bids = jpaBids.stream().map(jpaBid -> jpaBid.parseToBid()).collect(Collectors.toList());
            result.put(DATA, bids);
            result.put(STATUS, SUCCESS);
        } else {
            result.put(STATUS, FAILED);
        }
        return result;
    }

    public Map<String, Object> calculateResult(String homeName) {
        Map<String, Object> resultMap = new HashMap<>();
        List<JPABid> jpaBidList = bidRepo.findAllByHomeName(homeName);
        List<Bid> bidList = jpaBidList.stream().map(jpaBid -> jpaBid.parseToBid()).collect(Collectors.toList());
        Home home = homeRepo.findByHomeName(homeName).parseToHome();

        calculate(resultMap, bidList, home);

        return resultMap;
    }
}
