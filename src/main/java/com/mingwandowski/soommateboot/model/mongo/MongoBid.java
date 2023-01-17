package com.mingwandowski.soommateboot.model.mongo;

import com.mingwandowski.soommateboot.model.Bid;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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

    public static MongoBid parseBid(Bid bid) {
        return new MongoBid(
                bid.getId(), bid.getUserName(), bid.getHomeName(),
                bid.getRoom1Price(), bid.getRoom2Price(), bid.getRoom3Price(),
                bid.getRoom4Price(), bid.getRoom5Price()
        );
    }

    public Bid parseToBid() {
        return new Bid(
                this.getId(), this.getUserName(), this.getHomeName(),
                this.getRoom1Price(), this.getRoom2Price(), this.getRoom3Price(),
                this.getRoom4Price(), this.getRoom5Price()
        );
    }
}
