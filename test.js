const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(isPrime(96));

findAllPrimeNum = (num) => {
  let primeNumber = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primeNumber.push(i);
    }
  }
  return primeNumber;
};

console.log(findAllPrimeNum(100));

const largePrimeNum = findAllPrimeNum(100).findLast(isPrime);
console.log(largePrimeNum);
