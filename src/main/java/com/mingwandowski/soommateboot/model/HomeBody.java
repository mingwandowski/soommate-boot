package com.mingwandowski.soommateboot.model;


import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class HomeBody {

    private String id = UUID.randomUUID().toString();
    private String homeName;
    private String homePassword;
    private int numOfRooms;
    private double totalPrice;
    private String room1Name;
    private String room2Name;
    private String room3Name;
    private String room4Name;
    private String room5Name;
}
