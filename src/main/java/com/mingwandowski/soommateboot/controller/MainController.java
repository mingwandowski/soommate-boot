package com.mingwandowski.soommateboot.controller;

import com.mingwandowski.soommateboot.model.Home;
import com.mingwandowski.soommateboot.model.Bid;
import com.mingwandowski.soommateboot.service.impl.JPAMainServiceImpl;
import com.mingwandowski.soommateboot.service.MainService;
import com.mingwandowski.soommateboot.service.impl.MongoMainServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping(path="/")
public class MainController {

    @Autowired
    JPAMainServiceImpl JPAMainService;

    @Autowired
    MongoMainServiceImpl mongoMainService;

    @Value("${db.source}")
    String dataSource;

    private MainService getMainService() {
        if("jpa".equals(dataSource)) {
            return JPAMainService;
        } else if("mongodb".equals(dataSource)) {
            return mongoMainService;
        }
        return null;
    }

    @PostMapping("/addHome")
    public ResponseEntity<Map<String, Object>> addHome(@RequestBody Home home) {
        Map<String, Object> resultMap = getMainService().addHome(home);
        return new ResponseEntity<>(resultMap, HttpStatus.OK);
    }

    @PostMapping("/signInHome")
    public ResponseEntity<Map<String, Object>> signInHome(@RequestBody Home signInHomeBody) {
        Map<String, Object> resultMap = getMainService().signInHome(signInHomeBody.getHomeName(), signInHomeBody.getHomePassword());
        return new ResponseEntity<>(resultMap, HttpStatus.OK);
    }

    @PostMapping("/addBid")
    public ResponseEntity<Map<String, Object>> addBid(@RequestBody Bid bid) {
        Map<String, Object> resultMap = getMainService().addBid(bid);
        return new ResponseEntity<>(resultMap, HttpStatus.OK);
    }

    @GetMapping("getBids")
    public ResponseEntity<Map<String, Object>> getUsers(@RequestParam String homeName) {
        Map<String, Object> resultMap = getMainService().findBids(homeName);
        return new ResponseEntity<>(resultMap, HttpStatus.OK);
    }

    @GetMapping("calculate")
    public ResponseEntity<Map<String, Object>> calculate(@RequestParam String homeName) {
        Map<String, Object> resultMap = getMainService().calculateResult(homeName);
        return new ResponseEntity<>(resultMap, HttpStatus.OK);
    }

}
