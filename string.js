/*
### Task-1: 
Count how many times a string has the letter `a`
*/

let str = "i am a savage";
let strLower = str.toLowerCase();
let count = 0;
for (let i = 0; i <= str.length; i++) {
  if (strLower[i] === "a") {
    count++;
  }
}
console.log(count);

/*
### Task-2: 
Count how many times a string has the letter `a` or `A`
*/

let str2 = "i am a sAvAge and also a nerd";
let count1 = 0;
let count2 = 0;

for (let i = 0; i <= str2.length; i++) {
  if (str2[i] === "a") {
    count1++;
  }
  if (str2[i] === "A") {
    count2++;
  }
}
console.log("a = " + count1);
console.log("A = " + count2);

/*
### Task-3: 

Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 
*/

let prb = "savage";
prb = prb.toLowerCase();
if (
  prb.includes("a") &&
  prb.includes("e") &&
  prb.includes("i") &&
  prb.includes("o") &&
  prb.includes("u")
) {
  console.log("All vowel are in present");
} else {
  console.log("All vowel are not in present");
}

/*
### Task-4: 
If a given string has either x, replace x by y. if the given string has X, replace it by Y.

    Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
*/

let text = "xsavageX";
console.log(text);
let text1 = text.replace("x", "y").replace("X", "Y");

console.log(text1);

/*
### Task-5:
Capitalize Every first Letter of each word in a String 
*/

let sName = "imtiaz a dog";
let firstChar = sName.slice(0, 1);
firstChar = firstChar.toUpperCase();
let restChar = sName.slice(1, sName.length);
let result = firstChar.concat(restChar);
console.log(result);

/*
### Task-6:
check it is palindrome or not 
*/

let word = "kayak";
let temp = "";
for (let i = 0; i < word.length; i++) {
  temp = word[i] + temp;
}
console.log(temp);
if (word === temp) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome");
}
