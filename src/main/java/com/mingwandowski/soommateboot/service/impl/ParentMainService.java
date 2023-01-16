package com.mingwandowski.soommateboot.service.impl;

import com.mingwandowski.soommateboot.model.Bid;
import com.mingwandowski.soommateboot.model.Home;
import com.mingwandowski.soommateboot.model.Result;
import com.mingwandowski.soommateboot.service.MainService;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public abstract class ParentMainService implements MainService {

    public void calculate(Map<String, Object> resultMap, List<Bid> bidList, Home home) {

        // create result and variables
        Result result = new Result();
        result.setHomeName(home.getHomeName());

        double totalPrice = home.getTotalPrice();
        int numOfRooms = home.getNumOfRooms();

        Bid[] bids = bidList.toArray(new Bid[0]);

        // init bidTable (bidTable[bidder][priceOfRoom])
        double[][] bidTable = createBidTable(numOfRooms, bids);

        // init combination (combination<[1,2,3], [1,3,2] ...>)
        List<Integer[]> combinations = getCombination(numOfRooms);

        // find the best combination
        findBestCombination(result, bids, totalPrice, numOfRooms, bidTable, combinations);

        resultMap.put(DATA, result);
        resultMap.put(STATUS, SUCCESS);
    }

    private double[][] createBidTable(int numOfRooms, Bid[] bids) {
        double[][] res = new double[numOfRooms][numOfRooms];
        for(int i = 0; i < numOfRooms; i++){
            res[i][0] = bids[i].getRoom1Price();
            res[i][1] = bids[i].getRoom2Price();
            if(numOfRooms == 2) continue;
            res[i][2] = bids[i].getRoom3Price();
            if(numOfRooms == 3) continue;
            res[i][3] = bids[i].getRoom4Price();
            if(numOfRooms == 4) continue;
            res[i][4] = bids[i].getRoom5Price();
        }
        return res;
    }

    private List<Integer[]> getCombination(int numOfRooms) {
        List<Integer[]> res = new ArrayList<>();
        boolean[] visited = new boolean[numOfRooms];
        backtrack(res, visited, new ArrayList<>());
        return res;
    }

    private void backtrack(List<Integer[]> res, boolean[] visited, ArrayList<Integer> list) {
        if(list.size() == visited.length){
            res.add(list.toArray(new Integer[0]));
            return;
        }
        for(int i = 0; i < visited.length; i++){
            if(visited[i]) continue;
            list.add(i);
            visited[i] = true;
            backtrack(res, visited, list);
            visited[i] = false;
            list.remove((Integer)i);
        }
    }

    private void findBestCombination(Result result, Bid[] bids, double totalPrice, int numOfRooms, double[][] bidTable, List<Integer[]> combinations) {

        double maxPrice = 0.0;
        double averageSaved = 0.0;

        // traversal all combinations
        for(Integer[] combination : combinations){
            // get tmp price
            double tmpPrice = 0.0;
            for(int i = 0; i < combination.length; i++)
                tmpPrice += bidTable[combination[i]][i];
            if(tmpPrice <= maxPrice) continue;
            // tmp price > max price
            maxPrice = tmpPrice;
            averageSaved = (maxPrice - totalPrice) / numOfRooms;
            BigDecimal bg = new BigDecimal(averageSaved);
            averageSaved = bg.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();

            result.setRoom1User(bids[combination[0]].getUserName());
            result.setRoom2User(bids[combination[1]].getUserName());
            if(numOfRooms >= 3) result.setRoom3User(bids[combination[2]].getUserName());
            if(numOfRooms >= 4) result.setRoom4User(bids[combination[3]].getUserName());
            if(numOfRooms == 5) result.setRoom5User(bids[combination[4]].getUserName());

            result.setRoom1Price(bidTable[combination[0]][0] - averageSaved);
            result.setRoom2Price(bidTable[combination[1]][1] - averageSaved);
            if(numOfRooms >= 3) result.setRoom3Price(bidTable[combination[2]][2] - averageSaved);
            if(numOfRooms >= 4) result.setRoom4Price(bidTable[combination[3]][3] - averageSaved);
            if(numOfRooms == 5) result.setRoom5Price(bidTable[combination[4]][4] - averageSaved);

            result.setAverageSaved(averageSaved);
        }
    }
}
