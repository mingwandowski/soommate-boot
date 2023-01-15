package com.mingwandowski.soommateboot.controller;

import com.mingwandowski.soommateboot.model.Home;
import com.mingwandowski.soommateboot.model.Bid;
import com.mingwandowski.soommateboot.model.MongoHome;
import com.mingwandowski.soommateboot.repo.HomeRepo;
import com.mingwandowski.soommateboot.repo.MongoHomeRepo;
import com.mingwandowski.soommateboot.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path="/")
public class MainController {

    @Autowired
    HomeRepo homeRepo;

    @Autowired
    MainService mainService;

    @Autowired
    MongoHomeRepo mongoHomeRepo;

    @GetMapping("/getHomes")
    public ResponseEntity<List<Home>> getHomes() {
        List<Home> homes = homeRepo.findAll();
        return new ResponseEntity<>(homes, HttpStatus.OK);
    }

    @PostMapping("/addHome")
    public ResponseEntity<Map<String, Object>> addHome(@RequestBody Home home) {
        Map<String, Object> resultMap = mainService.addHome(home);
        return new ResponseEntity<>(resultMap, HttpStatus.OK);
    }

    @PostMapping("/signInHome")
    public ResponseEntity<Map<String, Object>> signInHome(@RequestBody Home signInHomeBody) {
        Map<String, Object> resultMap = mainService.signInHome(signInHomeBody.getHomeName(), signInHomeBody.getHomePassword());
        return new ResponseEntity<>(resultMap, HttpStatus.OK);
    }

    @PostMapping("/addBid")
    public ResponseEntity<Map<String, Object>> addBid(@RequestBody Bid bid) {
        Map<String, Object> resultMap = mainService.addBid(bid);
        return new ResponseEntity<>(resultMap, HttpStatus.OK);
    }

    @GetMapping("getBids")
    public ResponseEntity<Map<String, Object>> getUsers(@RequestParam String homeName) {
        Map<String, Object> resultMap = mainService.findBids(homeName);
        return new ResponseEntity<>(resultMap, HttpStatus.OK);
    }

    @GetMapping("calculate")
    public ResponseEntity<Map<String, Object>> calculate(@RequestParam String homeName) {
        Map<String, Object> resultMap = mainService.calculateResult(homeName);
        return new ResponseEntity<>(resultMap, HttpStatus.OK);
    }

    @GetMapping("test")
    public ResponseEntity<List<MongoHome>> test() {
        List<MongoHome> resultMap = mongoHomeRepo.findAll();
        return new ResponseEntity<>(resultMap, HttpStatus.OK);
    }
}
