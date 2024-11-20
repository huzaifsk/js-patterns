function pattern10(limit) {
  let pattern = "";
  for (let i = 0; i < 2 * limit - 1; i++) {
    let starCount = i < limit ? i + 1 : 2 * limit - i - 1;
    for (let j = 0; j < starCount; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

pattern10(5);

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
