let originalString: string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let parts:string[] = originalString.split(" ");
let word: string = "Java";
console.log ("String :"+originalString);

//Find total number of occurrences && Print count and Indexes of the word
let count: number = 0;
let indexes: number[] = []; 
let index = originalString.indexOf(word);

while (index !== -1) {
    count++;
    indexes.push(index);
    index = originalString.indexOf(word, index + 1);
}

console.log("Total occurrences:", count);
console.log("Indexes:", indexes);