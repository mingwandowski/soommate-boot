package com.mingwandowski.soommateboot.model.jpa;

import com.mingwandowski.soommateboot.model.Bid;
import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Table(name = "bid")
public class JPABid {

    @Id
    private String id;
    private String userName;
    private String homeName;
    private double room1Price;
    private double room2Price;
    private double room3Price;
    private double room4Price;
    private double room5Price;

    public static JPABid parseBid(Bid bid) {

        return new JPABid(
                bid.getId(), bid.getUserName(), bid.getHomeName(),
                bid.getRoom1Price(), bid.getRoom2Price(), bid.getRoom3Price(),
                bid.getRoom4Price(), bid.getRoom5Price());
    }

    public Bid parseToBid() {
        return new Bid(
                this.getId(), this.getUserName(), this.getHomeName(),
                this.getRoom1Price(), this.getRoom2Price(), this.getRoom3Price(),
                this.getRoom4Price(), this.getRoom5Price()
        );
    }
}
