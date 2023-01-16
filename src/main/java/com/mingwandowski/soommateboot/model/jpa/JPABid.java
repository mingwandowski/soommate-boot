package com.mingwandowski.soommateboot.model.jpa;

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
