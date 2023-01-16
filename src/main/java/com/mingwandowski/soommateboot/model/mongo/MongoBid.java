package com.mingwandowski.soommateboot.model.mongo;

import com.mingwandowski.soommateboot.model.BidBody;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Document("bid")
public class MongoBid {

    @Id
    private String id;
    private String userName;
    private String homeName;
    private double room1Price;
    private double room2Price;
    private double room3Price;
    private double room4Price;
    private double room5Price;

    public static MongoBid parseBid(BidBody bid) {

        return new MongoBid(
                bid.getId(), bid.getUserName(), bid.getHomeName(),
                bid.getRoom1Price(), bid.getRoom2Price(), bid.getRoom3Price(),
                bid.getRoom4Price(), bid.getRoom5Price());
    }
}
