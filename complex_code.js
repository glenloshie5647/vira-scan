// filename: complex_code.js

/*
 * This code demonstrates a complex algorithm for generating Fibonacci sequence
 * up to a given number and calculates the sum of all even Fibonacci numbers.
 */

function generateFibonacciSequence(upperLimit) {
  // Variable Declarations
  let fibonacciSeq = [0, 1];
  let sumOfEven = 0;
  
  // Generate Fibonacci Sequence
  for(let i = 2; i <= upperLimit; i++) {
    fibonacciSeq[i] = fibonacciSeq[i-1] + fibonacciSeq[i-2];
    
    // Calculate Sum of Even Fibonacci Numbers
    if (fibonacciSeq[i] % 2 === 0) {
      sumOfEven += fibonacciSeq[i];
    }
  }
  
  return { sequence: fibonacciSeq, sumOfEven };
}

// Function Call
const result = generateFibonacciSequence(20);

// Output Fibonacci Sequence
console.log("Fibonacci Sequence:");
console.log(result.sequence.join(", "));

// Output Sum of Even Fibonacci Numbers
console.log("\nSum of Even Fibonacci Numbers:");
console.log(result.sumOfEven);