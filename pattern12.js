let pattern = "";

const pattern12 = (limit) => {
  let space = 2 * (limit - 1);
  for (let i = 1; i <= limit; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += j;
    }
    for (let j = 1; j <= space; j++) {
      pattern += " ";
    }
    for (let j = i; j >= 1; j--) {
      pattern += j;
    }
    pattern += "\n";
    space -= 2;
  }
  console.log(pattern);
};

pattern12(6);

// 1          1
// 12        21
// 123      321
// 1234    4321
// 12345  54321
// 123456654321
