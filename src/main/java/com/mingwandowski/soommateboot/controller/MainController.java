package com.mingwandowski.soommateboot.controller;

import com.mingwandowski.soommateboot.model.Home;
import com.mingwandowski.soommateboot.repo.HomeRepo;
import org.springframework.beans.factory.annotation.Autowired;
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
    public String addHome (@RequestBody Home home) {
        homeRepo.save(home);
        return "home saved";
    }
}
