// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe('objPrinter', () => {
  it('returns an array with a sentence about each person with their name capitalized', () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]

    const output = ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

    expect(objPrinter(people)).toEqual(output)

  })
})


// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// ● objPrinter › returns an array with a sentence about each person with their name capitalized

// ReferenceError: objPrinter is not defined

// b) Create the function that makes the test pass.

// Create a func called objPrinter that takes in a parm
// Create an new empty arr
// Iterate through the arr and access the objects using dot notation
// Push items into new arr and use .capitalize for the name 
// Return new arr

// Update: I wasnt able to use the .capitalize method, so I used the charAt(0).toUpperCase()
// I also had to split the name because the output is Capitalize the first and last name. 

const objPrinter = (arr) => {

  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].name.split(' ')[0].charAt(0).toUpperCase() + arr[i].name.split(' ')[0].slice(1) + " " + arr[i].name.split(' ')[1].charAt(0).toUpperCase() + arr[i].name.split(' ')[1].slice(1) + " is " + arr[i].occupation + ".")
  }

  return newArr
}

// PASS  ./code-challenges.test.js
// objPrinter
//   ✓ returns an array with a sentence about each person with their name capitalized (2 ms)

// Test Suites: 1 passed, 1 total

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe('remainderOf3', () => {

  it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const expectedOutput1 = [2, 0, -1, 0]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    const expectedOutput2 = [2, 1, -1]

    expect(remainderOf3(hodgepodge1)).toEqual(expectedOutput1)
    expect(remainderOf3(hodgepodge2)).toEqual(expectedOutput2)

  })
})

// ● remainderOf3 › returns an array of only the REMAINDERS of the numbers when divided by 3

// ReferenceError: remainderOf3 is not defined

// b) Create the function that makes the test pass.

// Create a function called remainderOf3 thats takes in a arr
// Use the .filter method and filter integers using typeff
// The once I have only numbers I will use the % (modulo) by 3
// return arr

//Update: I need to create a empty arr and after the filtering I pushed the items in to the new arr and returned it.
const remainderOf3 = (arr) => {

  let newArr = []

  arr.filter(item => {
    if (typeof item === "number") {
      newArr.push(item % 3)
    }
  })
  return newArr
}

// remainderOf3
// ✓ returns an array of only the REMAINDERS of the numbers when divided by 3

// Test Suites: 1 passed, 1 total


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe('sumCubed', () => {

  it('returns the sum of all the numbers cubed', () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125

    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)

  })
})

// ● sumCubed › returns the sum of all the numbers cubed

// ReferenceError: sumCubed is not defined

// b) Create the function that makes the test pass.

// Create a function called sumCubed and pass in an arr
// I will use the .map method and perfom logic to each item in the array
// I will cube them and them sum them up using a for loop
// return the arr
const sumCubed = (arr) => {

  let newArr = arr.map(item => {
    return (item ** 3)
  })

  let total = 0
  for (let i in newArr){
    total += newArr[i]
  }
  return total
}

// sumCubed
// ✓ returns the sum of all the numbers cubed

// Test Suites: 1 passed, 1 total


