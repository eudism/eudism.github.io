//1.Define a function max() that takes two numbers as arguments and returns the //largest of them.Use the if-then-else construct available in Javascript.
function max(x,y){
    
    if(x>y){
        return x;
    }
     else if(y>x)
            return y;
    else 
         return "equal";   
}
alert(max(4,8));

//2.Define a function maxOfThree() that takes three numbers as arguments and returns //the largest of them.

function maxOfThree(a,b,c){
    if(a>b){
       if(a>c){
        return a;
    } return c;
       }
else if(b>c){
    return b;
}
else return c;   
}
//Result
alert(maxOfThree(4,6,3));

//3.Write a function isVowel() that takes a character (i.e. a string of length 1) //and returns true if it is a vowel, false otherwise.
function isVowel(char){
    switch(char){
        case 'a': return true;
        case 'e': return true;
        case 'i': return true;
        case 'o': return true;
        case 'o': return true; 
        default:
        return false;
    }   
    
} 
//Result
alert(isVowel(7));

//4.
function sum(sumNUms){
    var total = 0;
	for (var i = 0; i < sumNUms.length; i++) {
		total += sumNUms[i];
	}
	return total;
    
} 

function multiply(multNums) {
	var total = 1;
	for (var i = 0; i < multNums.length; i++) {
		total = (total * multNums[i]);
	}
	return total;
}
alert(sum([1,2,3,4])+" "+ multiply([1,2,3,4]));


//5.Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset  //gaj".
function reverse(str) {
     var myReverse = '';
    for (var i = str.length - 1; i >= 0; i--) {
    	myReverse += str[i];
    
    }
    return myReverse;
}
//Result
alert(reverse("Eudis"));

//6.Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
 function findLongestWord(str) {

  var longestWord = 0;

  for (var i = 0; i < str.length; i++) {
    
    if (str[i].length > longestWord) {
       var temp=str[i].length;
        longestWord = temp;
    }
  }
  return longestWord;
}

alert (findLongestWord(["The quick brown fox jumped over the lazy dog","micheal"]));

//7.Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function findLongestWord(str,x){
    var longWord= str.filter(i=>i.length>x);
    return longWord;
 
}
alert(findLongestWord(["kevin","Derrick","Gilbert"],5));

//8.Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:
function jsfiddle(a){
    const b = a.map(function(elem, i, array) {
  return elem + 3;
})
console.log(b);
    
    const c = a.filter(function(elem, i, array){
  return elem === 3;});

console.log(c);

const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
console.log(d);
 } 

function testFunction(target,outcome){
    if(target===outcome){
        return "TEST SUCCEEDED";
    }
    else{return "TEST FAILED. target" + target + "outcome" + outcome;
        }
    }

alert (jsfiddle([1,2,3,4,5,6]));