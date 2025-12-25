function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Can not perform division by 0");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFn(10, 5)
  .then((result) => console.log(result)) // 2
  .catch((error) => console.log(error));
