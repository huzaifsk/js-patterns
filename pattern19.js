let pattern = "";

function pattern19(limit) {
  let inis = 0;
  for (let i = 0; i <= limit; i++) {
    for (let j = 0; j <= limit - i; j++) {
      pattern += "*";
    }
    for (let j = 0; j < inis; j++) {
      pattern += " ";
    }
    for (let j = 0; j <= limit - i; j++) {
      pattern += "*";
    }
    inis += 2;
    pattern += "\n";
  }
  inis = 8;
  for (let i = 0; i <= limit; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += "*";
    }
    for (let j = 0; j < inis; j++) {
      pattern += " ";
    }
    for (let j = 0; j <= i; j++) {
      pattern += "*";
    }
    inis -= 2;
    pattern += "\n";
  }
  console.log(pattern);
}

pattern19(4);

// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********
