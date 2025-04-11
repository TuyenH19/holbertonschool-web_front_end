function countPrimeNumbers() {
  let count = 0;

  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  return count;
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const start = performance.now();
const primeCount = countPrimeNumbers();
const end = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);
