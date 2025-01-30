const armstrongNumber = (num) => {
  let number = num.toString();
  let final = 0;
  for (let digit of number) {
    final += digit ** number.length;
  }
  return final;
};

console.log(armstrongNumber(153));
