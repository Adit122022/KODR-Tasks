/*
1. Reverse a String
Write a function that takes a string as input and returns the string reversed.
Example: "hello" → "olleh"

const str= "hello" 
first way
let rev =str.split('').reverse().join('');
console.log(rev)

// second way
function rString(str){
    let arr = str.split('')
console.log(arr)
 return arr.reverse().join("");
}
console.log(rString(str))

*************************************************************

2. Check for Palindrome
Create a function to check if a given string is a palindrome (reads the same forward and backward).
Example: "madam" → true, "hello" → false
let a ="madam"
function check(str){
    let rev =str.split('').reverse().join('')
    return rev === str;

}
console.log(check(a))

**************************************************************

3. FizzBuzz
Write a program that prints numbers from 1 to 100. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".

function fizbuzz(a) {
    for(let i = 1 ;i <=a ;i++){
        if( i % 3===0 && i % 5===0){
                    console.log(i +":  FizzBuzz")
                }
                else if(i % 5===0){
                    console.log(i +":  Buzz")
                }
                else if(i % 3===0 ){
                    console.log(i +":  FizZ")
                }
                else{
                   console.log(i)
                }
    }
}
fizbuzz(15);

*********************************************************************

4. Find the Largest Number in an Array
Implement a function that takes an array of numbers and returns the largest number.
Example: [1, 5, 3, 9] → 9


*/


