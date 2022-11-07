

/*  Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers*/

function sum(arr){
 let total=arr.reduce((counter,x)=>counter+x);
    return total;
}
console.log(sum([2,3,4]));

function multiply(arr){
    let mult=arr.reduce((multiple,x)=>multiple*x);
    return mult;
}
console.log(multiply([1,2,3,4,5,6]));


//Define a function reverse() that computes the reversal of a string.
function reverse(str){
  let reversed=  str.split('').reduce((reverse,element)=>element+reverse);
    return reversed;
}
console.log(reverse("Eudis"));

/* 7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. */

function filterLongWords(arr,num){
    let longestWord=arr.filter((x)=>x.length>num);
    return longestWord;
    
}
console.log(filterLongWords(["Eudis","Eric","IvanS"],4));