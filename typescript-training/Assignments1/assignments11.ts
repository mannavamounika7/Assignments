let n:number = 5;

//upper part
for (let i = 1; i <= n; i++){
   let line:string = "";

    for( let j = 1; j <= n - i; j++){
        line = line + " ";
    }
        for(let k = 1; k <= i; k++){
            line = line + k + " ";

        
    }

    console.log(line);
}
//lower part
for (let i = n - 1; i >= 1; i--){
   let line:string = "";

    for( let j = 1; j <= n - i; j++){
        line = line + " ";
    }
        for(let k = 1; k <= i; k++){
            line = line + k + " ";  
    }

    console.log(line);
}