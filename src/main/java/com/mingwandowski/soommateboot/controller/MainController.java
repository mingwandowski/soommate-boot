package com.mingwandowski.soommateboot.controller;

import com.mingwandowski.soommateboot.model.Home;
import com.mingwandowski.soommateboot.repo.HomeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/")
public class MainController {

    @Autowired
    HomeRepo homeRepo;

    @GetMapping("/getHomes")
    public String getHomes() {
        List<Home> homes = homeRepo.findAll();
        return homes.toString();
    }

    @PostMapping("/addHome")
    public ResponseEntity<Home> addHome (@RequestBody Home home) {
        Home newHome = homeRepo.save(home);
        return new ResponseEntity<>(newHome, HttpStatus.OK);
    }
}
