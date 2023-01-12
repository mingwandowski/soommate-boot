package com.mingwandowski.soommateboot.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@ToString
@Getter
@Setter
public class Result {

    private int id;
    private String homeName;
    private double averageSaved;
    private String room1User;
    private double room1Price;
    private String room2User;
    private double room2Price;
    private String room3User;
    private double room3Price;
    private String room4User;
    private double room4Price;
    private String room5User;
    private double room5Price;
}
