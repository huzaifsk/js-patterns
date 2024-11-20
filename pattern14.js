let pattern = "";

let pattern14 = (limit) => {
  for (let i = 0; i < limit; i++) {
    for (let ch = 0; ch <= i; ch++) {
      pattern += String.fromCharCode("A".charCodeAt(0) + ch) + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
};

pattern14(5);

// A
// A B
// A B C
// A B C D
// A B C D E
