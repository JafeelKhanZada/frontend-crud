let arr = [11, 12, 13, 10, 12, 11];

arr.forEach((v, k) => {
  let count = 0;
  arr.forEach((val, key) => {
    if (v === val && key !== k) {
      count = count + 1;
    }
  });
  console.log(v, "is : ", count, "time");
});
