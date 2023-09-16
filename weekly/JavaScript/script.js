"use strict";
class Questions {
  static reverseNumber(num) {
    return num.toString().split("").reverse().join("");
  }

  static checkPalindrome(word) {
    return word.split("").reverse().join("") === word;
  }
  static countVowels(sentence) {
    //Guard Clause
    if (typeof sentence !== "string") return;

    //rest of the code
    let newSentence = sentence.toLowerCase();
    let vowels = 0;
    let consonant = 0;
    newSentence
      .split(" ")
      .join("")
      .split("")
      .forEach((ch) => {
        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u")
          vowels++;
        else consonant++;
      });
    return [vowels, consonant];
  }

  static checkPrime(number) {
    if (typeof number !== "number") return;

    if ([0, 1].some((n) => number == n)) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }

  static checkLeapYear(year) {
    return new Date(year, 2, 0).getDate() === 29 ? true : false;
  }

  static calculateAge(birthYear) {
    return new Date().getFullYear() - birthYear;
  }
  static sumOfNumber(number) {
    if (typeof number !== "number") return;

    return number
      .toString()
      .split("")
      .reduce((sum, num) => sum + Number.parseInt(num), 0);
  }
  static genFibo(num) {
    let arr = [];
    let i = 0;
    let a = 0;
    let b = 1;
    let c;
    arr.push(a);
    arr.push(b);
    while (i < num) {
      c = a + b;
      a = b;
      b = c;
      arr.push(c);
      i++;
    }
    return arr;
  }
  static powNum(number, pow) {
    return number ** pow;
  }

  static findGCD(num1, num2) {
    let gcd;
    for (let i = 1; i <= num1 && i <= num2; i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
      }
    }
    return gcd;
  }
  static findBMI(weight, height) {
    //if height in cm then convert it into meters
    //assuming is in cm
    // Underweight = <18.5
    // Normal weight = 18.5–24.9
    // Overweight = 25–29.9
    // Obesity = BMI of 30 or greater
    let heightMeters = height / 100;
    return weight / heightMeters ** 2;
  }

  static generateRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  static reverseString(str) {
    return str.split(" ").reverse().join(" ");
  }
  static hasLeapSecond(year) {
    // List of leap second announcements (year, month, day)
    const leapSeconds = [
      [1972, 6, 30],
      [1972, 12, 31],
      [1973, 12, 31],
      [1974, 12, 31],
      [1975, 12, 31],
      [1976, 12, 31],
      [1977, 12, 31],
      [1978, 12, 31],
      [1979, 12, 31],
      [1981, 6, 30],
      [1982, 6, 30],
      [1983, 6, 30],
      [1985, 6, 30],
      [1987, 12, 31],
      [1989, 12, 31],
      [1990, 12, 31],
      [1992, 6, 30],
      [1993, 6, 30],
      [1994, 6, 30],
      [1995, 12, 31],
      [1997, 6, 30],
      [1998, 12, 31],
      [2005, 12, 31],
      [2008, 12, 31],
      [2012, 6, 30],
      [2015, 6, 30],
      [2016, 12, 31],
      [2018, 12, 31],
    ];

    // Check if the given year is in the list of leap second years
    return leapSeconds.some(
      ([leapYear, month, day]) =>
        year === leapYear && (month === 6 || month === 12) && day === 30
    );
  }

  static calculateCompoundInterest(P, r, n, t) {
    let ratePercent = r / 100;
    return (P * Math.pow(1 + ratePercent / n, n * t)).toFixed(2, 0);
  }
  static calcExpo(number, expo) {
    if (expo === 0) return 1;
    if (expo < 0) return 1;

    let result = 1;
    for (let i = 1; i <= expo; i++) {
      result *= number;
    }
    return result;
  }

  static checkOddOrEven(num) {
    return num % 2 === 0;
  }

  static getFactorial(num) {
    let res = 1;
    for (let i = num; i >= 1; i--) {
      res *= i;
    }
    return res;
  }

  static tellFortune(yourName, children, partnerName, place, job) {
    return `${yourName} will be ${job} in ${place}, and married to ${partnerName} with ${
      children >= 1
        ? children === 1
          ? children + " kid"
          : children + " kids"
        : "No kids"
    }`;
  }

  static calculatePetAge(age) {
    return age * 7;
  }
}

const question = new Questions();
// console.log(Questions.reverseNumber(12345));

// console.log(Questions.checkPalindrome("cat"));
// console.log(Questions.countVowels("Number"));

// console.log(Questions.checkPrime(12));
// console.log(Questions.checkLeapYear(2021));
// console.log(Questions.calculateAge(2002));
// console.log(Questions.sumOfNumber(112));
// let x = Questions.genFibo(5);
// console.log(x);
// console.log(Questions.powNum(3, 3));
// console.log(Questions.findGCD(12, 8));
// console.log(Questions.findBMI(48, 155));

// console.log(Questions.generateRandomNumbers(1, 4));
// console.log(Questions.reverseString("Reverse this string"));

// const yearToCheck = 1999;
// if (Questions.hasLeapSecond(yearToCheck)) {
//   console.log(`${yearToCheck} has a leap second.`);
// } else {
//   console.log(`${yearToCheck} does not have a leap second.`);
// }

// console.log(Questions.calcExpo(3, 2));

// console.log(Questions.getFactorial(5));

// Questions.tellFortune("Shoaeeb", 5, "Shania", "Indonesia", "Software Engineer");
// console.log(`Your Pet Age in Human Years is ${Questions.calculatePetAge(2)}`);
let textArea = document.querySelector(".textarea");
textArea.focus();
textArea.value.trim();

const displayAllCommands = () => {
  textArea.value = `#:> type revnum to Reverse A Number
type pldrm to check a word  is Palindrome or not
type cnvow to count number of vowels in a sentence
type prime to check whether a number is prime or not
type lpyr to check whether a year is leap or not
type knowage to calculate your age
type smdigits to know the sum of all the digits in a number
type genfib to generate a fibonacci series
type pown to calculate the power of a number
type gcd to get the gcd between two numbers
type bmi to know your BMI
type genrand to get a random number between two number
type revforme to reverse a sentence
type chklpsc to check whether the a year has a leap second or not
type calcci to calculate the compound interest
type expo to calculate the result of exponentiation
type eveorodd to check whether a number is odd or even
type calcfac to get the factorial of a number
type tellfortune to know your fortune
clear to clear the console
`;
};

const getInput = (e) => {
  if (e.key === "Enter") {
    let result = textArea.value.replace(/[^0-9]/g, "");
    console.log(result);
    result = Questions.reverseNumber(Number.parseInt(result));
    textArea.value = `${result}`;
    window.removeEventListener("keydown", getInput);
  }
};

const getInputWord = (e) => {
  if (e.key === "Enter") {
    let userInput = textArea.value.split("\n").join(",");
    userInput = userInput.split(",").join(" ").split(" ");
    let result = Questions.checkPalindrome(userInput[5]);
    if (result) {
      textArea.value = `${userInput[5]} is a palindrome`;
    } else {
      textArea.value = `${userInput[5]} is not a palindrome `;
    }
    window.removeEventListener("keydown", getInputWord);
  }
};
const getInputStr = (e) => {
  if (e.key === "Enter") {
    let userInput = textArea.value.split("\n")[1];
    const [vowels, consonants] = Questions.countVowels(
      userInput.slice(0, userInput.indexOf("command") - 1)
    );
    textArea.value = `vowels in the sentence are ${vowels} and number of consonants in sentence is ${consonants}`;
    window.removeEventListener("keydown", getInputStr);
  }
};
const getInputNum = (e) => {
  if (e.key === "Enter") {
    let num = textArea.value.replace(/[^0-9]/g, "");
    console.log(typeof num);
    let result = Questions.checkPrime(Number.parseInt(num));
    if (result) {
      textArea.value = `${num} is a prime number`;
    } else {
      textArea.value = `${num} is not a prime number`;
    }
    window.removeEventListener("keydown", getInputNum);
  }
};

const getNum = (e) => {
  if (e.key === "Enter") {
    let num = textArea.value.replace(/[^0-9]/g, "");
    let result = Questions.sumOfNumber(Number.parseInt(num));
    textArea.value = `sum of digits of ${num} is ${result}`;
    window.removeEventListener("keydown", getNum);
  }
};
const getInputYear = (value, e) => {
  if (e.key === "Enter") {
    let year = textArea.value.replace(/[^0-9]/g, "");
    let result;
    if (value) {
      result = Questions.checkLeapYear(year);
      if (result) {
        textArea.value = `${year} is a leap year`;
      } else {
        textArea.value = `${year} is not a leap year`;
      }
    } else {
      result = Questions.calculateAge(year);
      textArea.value = `Your age is ${result}`;
    }
  }
  window.removeEventListener("keydown", getInputYear);
};
const getFibNum = (e) => {
  if (e.key === "Enter") {
    let num = textArea.value.replace(/[^0-9]/g, "");
    let res = Questions.genFibo(num);
    textArea.value = `${res}`;
    window.removeEventListener("keydown", getFibNum);
  }
};
const calcPow = (e) => {
  if (e.key === "Enter") {
    let [num, pow] = textArea.value
      .replace(/[^0-9]/g, "")
      .toString()
      .split("");
    // textArea.value = "";
    //   let pow = textArea.value.replace(/[^0-9]/g, "");
    let res = Questions.powNum(num, pow);
    textArea.value = `Result of ${num} to the power of ${pow} is ${res}`;
    window.removeEventListener("keydown", calcPow);
  }
};

const getGcd = (e) => {
  if (e.key === "Enter") {
    const regex = /\b\d+\b/g;

    const [num1, num2] = textArea.value.match(regex);

    console.log(num1, num2);
    let res = Questions.findGCD(num1, num2);
    textArea.value = `GCD of ${num1} and ${num2} is ${res}`;
    window.removeEventListener("keydown", getGcd);
  }
};

const getBmi = (e) => {
  if (e.key === "Enter") {
    const regex = /\b\d+\b/g;

    const [weight, height] = textArea.value.match(regex);

    console.log(weight, height);
    let res = Questions.findBMI(weight, height);
    textArea.value = `Your BMI is ${res}`;
    // Underweight = <18.5
    // Normal weight = 18.5–24.9
    // Overweight = 25–29.9
    // Obesity = BMI of 30 or greater
    if (res < 18.5) {
      textArea.value = "You are UnderWeight";
    } else if (res >= 18.5 && res <= 24.9) {
      textArea.value = "Normal Weight";
    } else if (res >= 25 && res <= 24.9) {
      textArea.value = "You are OverWeight";
    } else {
      textArea.value = "You are OverWeight";
    }
    window.removeEventListener("keydown", getBmi);
  }
};
const getRanNum = (e) => {
  if (e.key === "Enter") {
    const regex = /\b\d+\b/g;

    const [num1, num2] = textArea.value.match(regex);

    console.log(num1, num2);
    let res = Questions.generateRandomNumbers(num1, num2);
    textArea.value = `Your Lucky Number is 🍀 ${res}`;
    window.removeEventListener("keydown", getRanNum);
  }
};
const revStr = (e) => {
  if (e.key === "Enter") {
    let userInput = textArea.value.split("\n")[1];
    const res = Questions.reverseString(
      userInput.slice(0, userInput.indexOf("command") - 1)
    );
    textArea.value = `Cheers🥂, ${res}`;
    window.removeEventListener("keydown", revStr);
  }
};
const checkLeapSc = (e) => {
  if (e.key === "Enter") {
    let year = textArea.value.replace(/[^0-9]/g, "");
    console.log(year);
    let res = Questions.hasLeapSecond(Number.parseInt(year));
    if (res) {
      textArea.value = `${year} has leap second 📅`;
    } else {
      textArea.value = `${year} has no leap second 📅`;
    }
    // textArea.value = `${res ? ${year}+ 'has leap second 📅': ${year}+ 'has leap second 📅'}`
    window.removeEventListener("keydown", checkLeapSc);
  }
};
const calcCi = (e) => {
  if (e.key === "Enter") {
    const regex = /\b\d+\b/g;

    const [Principle, rate, n, time] = textArea.value.match(regex);
    const res = Questions.calculateCompoundInterest(Principle, rate, n, time);
    textArea.value = `↗️ ${res}`;
    window.removeEventListener("keydown", calcCi);
  }
};
const getExpo = (e) => {
  if (e.key === "Enter") {
    const regex = /\b\d+\b/g;

    const [num1, num2] = textArea.value.match(regex);
    let res = Questions.calcExpo(num1, num2);
    textArea.value = `Whoo woo 😅, ${num1} raise to power of ${num2} is ${res}`;
    window.removeEventListener("keydown", getExpo);
  }
};
const chkNum = (e) => {
  if (e.key === "Enter") {
    const regex = /\b\d+\b/g;

    const num = textArea.value.match(regex);
    let res = Questions.checkOddOrEven(num);
    if (res) {
      textArea.value = `${num} is a even number 🫡`;
    } else {
      textArea.value = `${num} is a odd number 🙅‍♂️`;
    }
    window.removeEventListener("keydown", chkNum);
  }
};
const calcFac = (e) => {
  if (e.key === "Enter") {
    const regex = /\b\d+\b/g;

    const num = textArea.value.match(regex);
    let res = Questions.getFactorial(num);
    textArea.value = ` 😀 factorial of ${num} is ${res}`;
    window.removeEventListener("keydown", calcFac);
  }
};

const tellFortune = (e) => {
  if (e.key === "Enter") {
    let userInput = textArea.value.split("\n")[1];
    userInput = userInput.split(",");

    let [name, children, partnerName, place, job] = userInput;
    job = job.split(" ");
    job = job.splice(
      0,
      job.findIndex((ele) => ele == "command")
    );
    console.log(name, children, partnerName, place, job);
    let res = Questions.tellFortune(name, children, partnerName, place, job);
    textArea.value = `${res}`;
    window.removeEventListener("keydown", tellFortune);
  }
};
const handleInput = (value) => {
  if (value === "revnum") {
    textArea.value = "";
    textArea.value = "#:> Enter a number";
    window.addEventListener("keydown", getInput);
  } else if (value === "pldrm") {
    textArea.value = "#:> Enter a word";
    window.addEventListener("keydown", getInputWord);
  } else if (value === "cnvow") {
    textArea.value = "#:> Enter a Sentence";
    window.addEventListener("keydown", getInputStr);
  } else if (value === "prime") {
    textArea.value = "#:> Enter a number";
    window.addEventListener("keydown", getInputNum);
  } else if (value === "lpyr") {
    textArea.value = "#:> Enter a year";
    window.addEventListener("keydown", getInputYear.bind(null, true));
  } else if (value === "knowage") {
    textArea.value = "#:> Enter a year";
    window.addEventListener("keydown", getInputYear.bind(null, false));
  } else if (value === "smdigits") {
    textArea.value = "#:> Enter a number";
    window.addEventListener("keydown", getNum);
  } else if (value === "genfib") {
    textArea.value = " #:> Enter a number";
    window.addEventListener("keydown", getFibNum);
  } else if (value === "pown") {
    textArea.value = "#:> Enter a number and power";
    window.addEventListener("keydown", calcPow);
  } else if (value === "gcd") {
    textArea.value = "#:> Enter first number and second number";
    window.addEventListener("keydown", getGcd);
  } else if (value === "bmi") {
    textArea.value = "#:> Enter weight and height (in cm)";
    window.addEventListener("keydown", getBmi);
  } else if (value === "genrand") {
    textArea.value = "#:> Enter firstNumber and SecondNumber";
    window.addEventListener("keydown", getRanNum);
  } else if (value === "revforme") {
    textArea.value = "#:> Enter a sentence";
    window.addEventListener("keydown", revStr);
  } else if (value === "chklpsc") {
    textArea.value = "#:> Enter a year";
    window.addEventListener("keydown", checkLeapSc);
  } else if (value === "calcci") {
    textArea.value = "#:> Enter Principle and rate and n and year";
    window.addEventListener("keydown", calcCi);
  } else if (value === "expo") {
    textArea.value = "#:> Enter firstNumber and Second Number";
    window.addEventListener("keydown", getExpo);
  } else if (value === "eveorodd") {
    textArea.value = "#:> Enter number";
    window.addEventListener("keydown", chkNum);
  } else if (value === "calcfac") {
    textArea.value = "#:> Enter number";
    window.addEventListener("keydown", calcFac);
  } else if (value === "tellfortune") {
    //yourName, children, partnerName, place, job
    textArea.value = "#:> Enter yourName,children,partnerName,place,job";
    window.addEventListener("keydown", tellFortune);
  }

  return;
};
const takeInput = () => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      // console.log(textArea.value);
      let userInput = textArea.value.split("\n");
      userInput = userInput[userInput.length - 1];
      if (userInput.trim().includes("help")) {
        displayAllCommands();
      } else if (userInput.trim().includes("revnum")) {
        handleInput("revnum");
      } else if (userInput.trim().includes("pldrm")) {
        handleInput("pldrm");
      } else if (userInput.includes("clear")) {
        textArea.value = "";
      } else if (userInput.includes("cnvow")) {
        handleInput("cnvow");
      } else if (userInput.includes("prime")) {
        handleInput("prime");
      } else if (userInput.includes("lpyr")) {
        handleInput("lpyr");
      } else if (userInput.includes("knowage")) {
        handleInput("knowage");
      } else if (userInput.includes("smdigits")) {
        handleInput("smdigits");
      } else if (userInput.includes("genfib")) {
        handleInput("genfib");
      } else if (userInput.includes("pown")) {
        handleInput("pown");
      } else if (userInput.includes("gcd")) {
        handleInput("gcd");
      } else if (userInput.includes("bmi")) {
        handleInput("bmi");
      } else if (userInput.includes("genrand")) {
        handleInput("genrand");
      } else if (userInput.includes("revforme")) {
        handleInput("revforme");
      } else if (userInput.includes("chklpsc")) {
        handleInput("chklpsc");
      } else if (userInput.includes("calcci")) {
        handleInput("calcci");
      } else if (userInput.includes("expo")) {
        handleInput("expo");
      } else if (userInput.includes("eveorodd")) {
        handleInput("eveorodd");
      } else if (userInput.includes("calcfac")) {
        handleInput("calcfac");
      } else if (userInput.includes("tellfortune")) {
        handleInput("tellfortune");
      } else {
        // console.log("hello");
        textArea.value = `#:> ${textArea.value} command not found`;
        //do something else
      }
    } else {
      return;
    }
  });
};
takeInput();
