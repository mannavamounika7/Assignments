
let customerName : string ="Mounika";
let creditScore : number = 720;
income : number = 55000.0;
isEmployed : boolean = true;
debtToIncomeRatio : number = 35.0;


if(creditScore > 750){
    console.log ("The loan is automatically approved.");
}
else if (creditScore >= 650 && creditScore <= 750){
    console.log ("additional checks are performed.")
    if (income < 50000){
       if (isEmployee){
        if (debtToIncomeRatio < 40.0){
            console.log ("is eligible  for loan");

        } else{
            console.log ("is not eligiable for loan as ratio is too high");
        }

       } else {
            console.log ("is not employee");
            
        }
    } else {
        console.log ("income is less than 50000");
    }
        if(CreditScore <= 650){
            console.log ("loan is denied");
        }
            
            

    

}