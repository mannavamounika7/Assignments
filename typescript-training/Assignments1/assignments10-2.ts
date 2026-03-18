//example 2
let price: number = [7, 6, 4, 3, 1];

let minPrice: number = price[0];
let maxProfit: number = 0;

for(let i = 1; i < price.length; i++){
    if(price[i] < minPrice){
        minPrice = price[i];
    }else{
        let profit = price[i] - minPrice;
        if(profit > maxProfit){
            maxProfit = profit;
        }
    }
}
console.log ("Maximum Profit:",maxProfit);