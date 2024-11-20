let pattern = "";

const pattern11 = (limit) => {
  let count = 1;
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) count = 0;
    else count = 1;
    for (let j = 0; j < i; j++) {
      pattern += count + " ";
      count = 1 - count;
    }
    pattern += "\n";
  }
  console.log(pattern);
};

pattern11(5);

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
