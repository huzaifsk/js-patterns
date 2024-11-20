let pattern = "";

let pattern15 = (limit) => {
  for (let i = 0; i < limit; i++) {
    for (let ch = 0; ch < limit - i; ch++) {
      pattern += String.fromCharCode("A".charCodeAt(0) + ch) + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
};

pattern15(5);

// A B C D E
// A B C D
// A B C
// A B
// A
