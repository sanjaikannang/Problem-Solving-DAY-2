// Day 2 Topic : Problem Solving -  Understanding the problem, breaking it down into smaller parts, identifying patterns

// Problems : 
// Explain the Fibonacci series and write a function to generate the first n numbers in the Fibonacci sequence.
// Write a function that takes a number as input and returns the factorial of that number.
// Write a function that checks if a given string is a palindrome.
// Write a function that finds the maximum and minimum elements in an array.
// Explain the concept of anagram and write a function to check if two strings are anagrams of each other.

//---------------------------------------------------------------------------------------------------------------------------

// 1. Explain the Fibonacci series and write a function to generate the first n numbers in the Fibonacci sequence.

function generateFibonacci(n) {
    // Initialize an array to hold the Fibonacci sequence
    const fibonacciSequence = [0, 1];

    // Generate subsequent numbers in the sequence
    for (let i = 2; i < n; i++) {
        const nextFibonacciNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextFibonacciNumber);
    }

    return fibonacciSequence;
}

// Example usage:
const n = 10; // Generate the first 10 Fibonacci numbers
console.log("The first", n, "numbers in the Fibonacci sequence are:", generateFibonacci(n));

// OutPut:
// The first 10 numbers in the Fibonacci sequence are: [
//     0, 1,  1,  2,  3,
//     5, 8, 13, 21, 34
//   ]
  
//---------------------------------------------------------------------------------------------------------------------------

// 2. Write a function that takes a number as input and returns the factorial of that number.

function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }

    // Recursive case: factorial of n is n multiplied by factorial of (n - 1)
    return n * factorial(n - 1);
}

// Example usage:
const num = 5;
console.log("The factorial of", num, "is:", factorial(num));

// Output :
// The factorial of 5 is: 120

//---------------------------------------------------------------------------------------------------------------------------

// 3. Write a function that checks if a given string is a palindrome.

function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the original and reversed strings are equal
    return cleanedStr === reversedStr;
}

// Example usage:
const inputString = "A man, a plan, a canal, Panama!";
console.log("Is the input string a palindrome?", isPalindrome(inputString));

// Output:
// Is the input string a palindrome? true

//---------------------------------------------------------------------------------------------------------------------------

// 4. Write a function that finds the maximum and minimum elements in an array.

function findMaxAndMin(arr) {
    // Initialize max and min variables with the first element of the array
    let max = arr[0];
    let min = arr[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Update max if current element is greater
        if (arr[i] > max) {
            max = arr[i];
        }
        // Update min if current element is smaller
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    // Return an object containing max and min values
    return { max, min };
}

// Example usage:
const array = [10, 5, 20, 8, 15];
const { max, min } = findMaxAndMin(array);
console.log("Maximum element:", max);
console.log("Minimum element:", min);

// Output:
// Maximum element: 20
// Minimum element: 5

//---------------------------------------------------------------------------------------------------------------------------

// 5. Explain the concept of anagram and write a function to check if two strings are anagrams of each other.

function areAnagrams(str1, str2) {
    // Remove non-alphanumeric characters and convert strings to lowercase
    const cleanedStr1 = str1.toLowerCase().replace(/[^a-z]/g, '');
    const cleanedStr2 = str2.toLowerCase().replace(/[^a-z]/g, '');

    // Check if the lengths of cleaned strings are equal
    if (cleanedStr1.length !== cleanedStr2.length) {
        return false; // If lengths are not equal, they cannot be anagrams
    }

    // Sort the characters of both strings and compare them
    const sortedStr1 = cleanedStr1.split('').sort().join('');
    const sortedStr2 = cleanedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example usage:
const string1 = "listen";
const string2 = "silent";
console.log("Are", string1, "and", string2, "anagrams?", areAnagrams(string1, string2));

// Output:
// Are listen and silent anagrams? true

//---------------------------------------------------------------------------------------------------------------------------

