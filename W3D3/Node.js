
const input = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let total = 0;
  getNumber(total);
  function getNumber(num) {
    input.question("Enter the number"+" :", (number) => {
      if (number == "stop") {
        console.log(num);
        input.close();
        return 0;
      }
      return getNumber((num += parseInt(number)));
    });
  }