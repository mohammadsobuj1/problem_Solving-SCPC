// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString(String) {
    let reversedStr = '';
    for (let i = String.length - 1; i >= 0; i--) {
        reversedStr += String[i];
    }
    return reversedStr;
}

// console.log(reverseString("hello world"))


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 




const PositiveNumbers = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// const inputArray = [2, -5, 10, -3, 7];
// // console.log(PositiveNumbers(inputArray))





// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.  



// {Sorry I can't do it. I think it's a bit advanced for me}


// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.



const findTwoNumbersWithSum = (arr, target) => {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(arr[i], i);
    }

    return null;
}

const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;

const result = findTwoNumbersWithSum(inputArray, targetValue);
//   console.log(result)




// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


const calculator = (num1, num2, operator) => ({
    '+': num1 + num2,
    '-': num1 - num2,
    '*': num1 * num2,
    '/': num1 / num2,
}[operator] || 'Invalid operator');
// console.log(calculator(10, 5, '-')); 


// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.



const generateRandomPassword=(length)=> {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    return password;
}


// console.log(generateRandomPassword(8));

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.


const findSecondSmallest=(arr)=> {
    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[1];
  }
  

  const arrr = [5, 4, 3, 8, 1, 9, 7]

//   console.log(findSecondSmallest(arrr))