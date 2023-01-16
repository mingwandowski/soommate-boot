package com.mingwandowski.soommateboot.model.jpa;

import com.mingwandowski.soommateboot.model.HomeBody;
import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Table(name = "home")
public class JPAHome {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
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

    public static JPAHome parseHome(HomeBody home) {

        return new JPAHome(
                home.getId(), home.getHomeName(), home.getHomePassword(), home.getNumOfRooms(),
                home.getTotalPrice(), home.getRoom1Name(), home.getRoom2Name(), home.getRoom3Name(),
                home.getRoom4Name(), home.getRoom5Name());
    }
}
