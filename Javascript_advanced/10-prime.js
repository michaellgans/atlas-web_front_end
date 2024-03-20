/* Task 10 */

function isPrime(currentNumber) {
    for (let x = 2; x <= Math.sqrt(currentNumber); x++) {
        if (currentNumber % x === 0) {
            return false;
        }
    }
    return true;
}

function countPrimeNumbers() {
    let count = 0;

    for (let x = 2; x < 101; x++) {
        if (isPrime(x)) {
            count++;
        }
    }
    return count;
}

let totalTime = 0;

for (let x = 0; x < 100; x++) {
    let startTime = performance.now();

    countPrimeNumbers();
    
    let endTime = performance.now();
    totalTime += endTime - startTime;
}

let endTime = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${totalTime} milliseconds`);