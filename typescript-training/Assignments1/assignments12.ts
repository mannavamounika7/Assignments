//example 1:
function mypower(x: number, n: number):number{
    let result: number = 1;

    for (let i = 1; i <= n; i++){
        result = result*x;   
     }
     return result;
}
console.log("result:", mypower(2.0, 10));

//example 2:
function mypow(x: number, n: number):number{
    let result: number = 1;
for (let i = 1; i <= n; i++){
    result = result*x;
}
return result;
}
console.log ("result:", mypow(2.1, 3));

//example 3:

function power(x: number, n: number):number{
    let result: number = 1;
    let power: number = -n;

for (let i = 1; i <= power; i++){
    result = result*x;
}
return 1 / result;
}
console.log ("result:", power(2.0, -2));
