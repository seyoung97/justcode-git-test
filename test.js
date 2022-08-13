function getEvenNumbers() {
  let arr = [];
  for (i = 1; i < 52; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(getEvenNumbers());
