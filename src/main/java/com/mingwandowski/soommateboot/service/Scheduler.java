package com.mingwandowski.soommateboot.service;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class Scheduler {

    @Scheduled(fixedRate = 10_000) public void scheduleTask() {
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss.SSS");
        String strDate = dateFormat.format(new Date());
        System.out.println("Fixed rate Scheduler: Task running at - " + strDate);
    }
}
