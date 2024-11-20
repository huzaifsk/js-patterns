pattern = "";

function pattern21(limit) {
  for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
      if (i == 0 || j == 0 || i == limit - 1 || j == limit - 1) {
        pattern += "*";
      } else {
        pattern += " ";
      }
    }
    pattern += "\n";
  }
  console.log(pattern);
}

pattern21(4);

// ****
// *  *
// *  *
// ****
