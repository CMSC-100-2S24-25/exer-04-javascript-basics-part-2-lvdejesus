const addAccount = require("./index.js");

// Should be false
console.log(addAccount(["Nelson", "ted.n@w3c.com", 43])); // incorrect number of inputs
console.log(addAccount(["Alan", "Turing", "aturingw3c", 58])); // invalid email
console.log(addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 13])); // age too low
console.log(addAccount(["", "Berners-Lee", "tim@w3c.com", 43])); // blank first name
console.log(addAccount(["Tim", "", "tim@w3c.com", 43])); // blank last name

// Should be true
console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));
console.log(addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 25]));
console.log(addAccount(["Ted", "Nelson", "ted.n@w3c.com", 43]));
