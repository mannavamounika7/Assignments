//example 1
let price: number[] = [7, 1, 5, 3, 6, 4];

let minPrice: number = price[0];
let maxProfit: number = 0;

for (let i = 1; i < price.length; i++){
    if(price[i] < minPrice){
        minPrice = price[i];
    }else{
        let profit: number = price [i] - minPrice;

        if (profit > maxProfit){
            maxProfit = profit;

        }
    }
}
console.log ("Maximum Profit:",maxProfit);



