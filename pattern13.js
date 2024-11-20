let pattern = "";
let count = 1;

let pattern13 = (limit) => {
  for (let i = 0; i <= limit; i++) {
    for (j = 0; j <= i; j++) {
      pattern += count + " ";
      count++;
    }
    pattern += "\n";
  }
  console.log(pattern);
};

pattern13(4);
