package com.mingwandowski.soommateboot.model.mongo;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Document("bid")
public class MongoBid {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private String userName;
    private String homeName;
    private double room1Price;
    private double room2Price;
    private double room3Price;
    private double room4Price;
    private double room5Price;
}
