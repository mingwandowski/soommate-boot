package com.mingwandowski.soommateboot.service;

import com.mingwandowski.soommateboot.model.Bid;
import com.mingwandowski.soommateboot.model.HomeBody;

import java.util.Map;

public interface MainService {

    String DATA = "data";
    String STATUS = "status";
    String SUCCESS = "success";
    String FAILED = "failed";

    Map<String, Object> addHome(HomeBody home);

    Map<String, Object> signInHome(String homeName, String password);

    Map<String, Object> addBid(Bid bid);

    Map<String, Object> findBids(String homeName);

    Map<String, Object> calculateResult(String homeName);
}
