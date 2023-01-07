package com.mingwandowski.soommateboot.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Home {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Getter @Setter private int id;
    @Getter @Setter private String homeName;
    @Getter @Setter private String homePassword;
    @Getter @Setter private int numOfRooms;
    @Getter @Setter private double totalPrice;
    @Getter @Setter private String room1Name;
    @Getter @Setter private String room2Name;
    @Getter @Setter private String room3Name;
    @Getter @Setter private String room4Name;
    @Getter @Setter private String room5Name;
}
