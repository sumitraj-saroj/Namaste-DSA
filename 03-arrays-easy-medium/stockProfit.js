
?
// You are given an array where each element represents the price of a stock on a specific day. Your goal is to determine the maximum profit that can be made by picking one day to buy the stock and a later day to sell it.



var maxProfit = function(prices) {
    let min = prices[0];
    let maxProfit = 0;

    for(let i = 1; i<prices.length; i++){
        if(prices[i]-min > maxProfit){
            maxProfit = prices[i]-min;
        }
        if(prices[i]<min){
            min = prices[i]
        }
    }return maxProfit;
    
};