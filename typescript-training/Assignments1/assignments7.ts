let originalString: string = "Java programming is fun and challenging";
let parts:string[] = originalString.split(" ");
console.log ("String :"+originalString);

//Count the total number of words in the sentence.
console.log ("Total words in string are :"+parts.length);

//Print the sentence words in reverse order.

//et string = originalString.split(" ");
let reverseString: string = "";
for (let i: number = parts.length-1; i >=0; i--){
    reverseString = reverseString + parts[i] + " ";
}
console.log ("Reverse order :"+reverseString);

//Convert the first character of each word to uppercase and print original sentence

let upperCaseString: string = "";
for (let i: number = 0; i < originalString.length; i++){
    if(i===0 || originalString[i - 1] === " ") {
        upperCaseString = upperCaseString + originalString[i].toUpperCase();
    }else{
        upperCaseString = upperCaseString + originalString[i];
    }
    
}
console.log ("uppercase string is :" +upperCaseString);




