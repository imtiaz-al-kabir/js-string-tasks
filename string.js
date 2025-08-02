/* ### Task-1: 
Count how many times a string has the letter `a`

---
### Task-2: 
Count how many times a string has the letter `a` or `A`

---

### Task-3: 

Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 

---

### Task-4: 
If a given string has either x, replace x by y. if the given string has X, replace it by Y.

    Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

---
### Task-5:
Capitalize Every first Letter of each word in a String */

// 1

let str = "i am a savage";
let strLower = str.toLowerCase();
let count = 0;
for (let i = 0; i <= str.length; i++) {
  if (strLower[i] === "a") {
    count++;
  }
}
console.log(count);

// 2

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

// 3

