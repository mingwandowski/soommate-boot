package com.mingwandowski.soommateboot.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Document("home")
public class MongoHome {

    @Id
    private String id;
    private String homeName;
    private String homePassword;
    private int numOfRooms;
    private double totalPrice;
    private String room1Name;
    private String room2Name;
    private String room3Name;
    private String room4Name;
    private String room5Name;

    public static MongoHome parseHome(Home home) {

        return new MongoHome(
                UUID.randomUUID().toString(), home.getHomeName(), home.getHomePassword(), home.getNumOfRooms(),
                home.getTotalPrice(), home.getRoom1Name(), home.getRoom2Name(), home.getRoom3Name(),
                home.getRoom4Name(), home.getRoom5Name());
    }
}
