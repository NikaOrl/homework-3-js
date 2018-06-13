//1
function splitAndMerge(str, sp) {
  let words = str.split(" ");
  words.forEach(function(word, i) {
    words[i] = word.split("").join(sp);
  })
  return words.join(" ");
}

console.log(splitAndMerge("My name is John"," ")); // "M y n a m e i s J o h n"
console.log(splitAndMerge("Hello World!",",")); // "H,e,l,l,o W,o,r,l,d,!"

//2
function convert(hash) {
  let arr = [];
  for (let i in hash) 
    arr.push([i, hash[i]]);
  return arr;
}

console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'})); //[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

//3
function toCamelCase(str) {
  let words = str.split(/-|_/)
  for(let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join("");
}

console.log(toCamelCase("the-stealth-warrior")); // returns "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // returns "TheStealthWarrior"

//4
function reverses(str) {
  let words = str.split(" ");
  words.forEach(function(word, i) {
       words[i] = word.split("").reverse().join("");
  })
  return words.join(" ");
}

console.log(reverses(" A fun little challenge! ")); //" A nuf elttil !egnellahc "

//5
function stringExpansion(str) {
  let result = "";
  let chars = str.split("");
  chars.forEach(function(char, i) {
    if(char.search(/[A-Za-z]/) != -1) {
      let numb = i > 0 && chars[i-1].search(/\d/) != -1 ? Number(chars[i-1]) : 1;
      for(let j = 0; j < numb; j++)
        result += char;
    }
  });
  return result;
}

console.log(stringExpansion('3D2a5d2f')); //'DDDaadddddff'
console.log(stringExpansion('3d332f2a')); //'dddffaa'
console.log(stringExpansion('abcde')); // 'abcde'
