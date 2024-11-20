let pattern = "";

function pattern16(limit) {
  for (let i = 0; i < limit; i++) {
    for (let ch = 0; ch <= i; ch++) {
      pattern += String.fromCharCode("A".charCodeAt(0) + i) + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

pattern16(5);
