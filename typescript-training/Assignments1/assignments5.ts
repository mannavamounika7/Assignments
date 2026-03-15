let names: string = ["Alice Johnson", "Bob Smith", "Carol Davis", "David Brown", "Eva Green"];
let baseSalary: number= [75000, 68000, 82000, 90000, 60000];
let experience: number = [5.1, 3.2, 7.1, 10.2, 2.4];
let rating: number = [4.2, 3.8, 4.5, 2.5, 3.5];

let hikeMap = new Map<string, number>();

for(let i:number =0; i < names.length; i++ ){

    let variablePay = 0;
    let bonus = 0;
    let reward = 0;
     if (rating[i] >= 4){
        variablePay = 15;
        bonus = 1500;
     } else if (rating [i] >= 3 && rating [i] < 4){
        variablePay = 10;
        bonus = 1200;
     } else {
        variablePay = 3;
        bonus=300;
     }


if(experience[i] >= 5){
    reward = 5000;

}

let hike = ( baseSalary [i]* variablePay /100 ) + bonus + reward ;
let hikepercentage =  (hike / baseSalary [i])*100;
 hikeMap.set(names[i], hikepercentage);
}

 hikeMap.forEach((value, key) => {    
  console.log(key + " : " + value + "%");  
});