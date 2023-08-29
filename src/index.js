/**
 * This quiz is to test your knowledge of if-statements.
 *
 * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
 * 2. Follow the README for instructions
 * 3. When you finish the quiz, create a PR on you repository
 * 4. Submit to your lead
 */

/**
 * Question 1
 * Declare a const named initialValue and set its value to 10.*/
const initialValue = 10;
console.log("[pregunta 1]: ", initialValue);

/**
 * Question 2
 * Declare a let variable named result and set its initial value to 0.
 */
let result = 0;
console.log("[pregunta 2]: ", result);

/**
 * Question 3
 * Using an if statement, check if initialValue is greater than 5. If true, set result to initialValue times 2.
 */
if (initialValue > 5) {
  result = initialValue * 2;
  console.log("[pregunta 3]: ", initialValue);
}

/**
 * Question 4
 * Declare an array named numbers containing the first five prime numbers.
 */
const numbers = [1, 3, 5, 7, 11];
console.log("[pregunta 4]: ", numbers);

/**
 * Question 5
 * If the fifth value in the numbers array is greater than initialValue, add 5 to result.
 */
if (numbers[4] > initialValue) {
  result += 5;
  console.log("[pregunta 5]: ", result);
}

/**
 * Question 6
 * Declare an object named settings with two properties: theme set to "light" and notifications set to true.
 */
const settings = {
  theme: "light",
  notifications: true
};
console.log("[pregunta 6]: ", settings);

/**
 * Question 7
 * Using an if statement, if notifications property is true, add 3 to result.
 */
if (settings.notifications === true) {
  result += 3;
  console.log("[pregunta 7]: ", result);
}

/**
 * Question: 8
 * Change the theme property of settings to "dark".
 */
settings.theme = "dark";
console.log("[pregunta 8]: ", settings.theme);

/**
 * Question: 9
 * If theme property is "dark" and result is less than 30, push the number 13 to the numbers array.
 */
if (settings.theme === "dark" && result < 30) {
  numbers.includes(13);
  console.log("[pregunta 9]: ", numbers);
}

/**
 * Question: 10
 * Declare a let variable named index and set its value to 4.
 */
let index = 4;
console.log("[pregunta 10]: ", index);

/**
 * Question: 11
 * If the value at the index position in the numbers array is equal to 7, multiply result by 2.
 */
if ((index === numbers[index]) === 7) {
  result *= 2;
}
console.log("[pregunta 11]: ", result);

/**
 * Question 12
 * Change the value of index to the first position in the numbers array that has a value of 13.
 */
numbers.reverse();
console.log("[pregunta 12]: ", numbers);

/**
 * Question 13
 * If the index is odd, set notifications property to false.
 */
if (index % 2 === 1 ? (settings.notifications = false) : "false");
console.log("[pregunta 13]: ", settings);

/**
 * Question 14
 * If the notifications property is false, subtract initialValue from result.
 */
settings.notifications === "false" ? (result = result - initialValue) : "false";
console.log("[pregunta 14]: ", result);

/**
 * Question 15
 * If initialValue minus result is less than 10, add an array containing three zeros to the end of the numbers array.
 */
if (initialValue - result < 10) {
  numbers.push(0, 0, 0);
  console.log("[pregunta 15]: ", numbers);
}

/**
 * Question 16
 * If the numbers array contains more than 7 elements, update the theme property of settings to "blue".
 */
if (numbers.length > 7) {
  settings.theme = "blue";
  console.log("[pregunta 16]: ", settings);
}

/**
 * Question 17
 * Declare a const named multiplier with a value of 5.
 */
const multiplier = 5;
console.log("[pregunta 17]: ", multiplier);

/**
 * Question 18
 * If the multiplier is a multiple of initialValue, assign the product of multiplier and result to result.
 */
multiplier % initialValue == 0 ? (result = multiplier * result) : "false";
console.log("[pregunta 18]: ", result);

/**
 * Question 19
 * Create a new object userData with properties name set to "Alex", and score set to the value of result.
 */
const userData = {
  name: "Alex",
  score: result
};
console.log("[pregunta 19]: ", userData);

/**
 * Question 20
 * If score is greater than 50, add a new property to userData named membership and set its value to "gold".
 */
userData.score > 50 ? (userData.memberShip = "gold") : "false";
console.log("[pregunta 20]: ", userData);

/**
 * Question 21
 * If userData name property starts with the letter "A", add 10 to the score property of userData.
 */
if (userData.name.startsWith("A")) {
  userData.score += 10;
}
console.log("[pregunta 21]: ", userData);

/**
 * Question 22
 * Push the score property of userData to the numbers array.
 */
numbers.push(userData.score);
console.log("[pregunta 22]: ", numbers);

/**
 * Question 23
 * If the last element of the numbers array is odd, add a hasBonus property to userData and set its value to true.
 */
(numbers.length - 0) % 2 === 1 ? (userData.hasBonus = true) : "false";
console.log("[pregunta 23]: ", userData);

/**
 * Question 24
 * If settings.theme is not "red", add 15 to the score property of userData.
 */
settings.theme !== "red" ? (userData.score += 15) : "false";
console.log("[pregunta 24]: ", userData);

/**
 * Question 25
 * If userData has a hasBonus property and its value is true, set result to the sum of result and the score property of userData.
 */
if (userData.hasBonus === true) {
  result += userData.score;
}
console.log("[pregunta 25]: ", result);
