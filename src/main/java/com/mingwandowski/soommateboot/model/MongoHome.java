package com.mingwandowski.soommateboot.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Document("home")
public class MongoHome {

    @Id
    private int id;
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
