let pattern = "";

function pattern20(limit) {
  let space = 2 * limit - 2;
  for (let i = 1; i <= 2 * limit - 1; i++) {
    let star = i;
    if (i > limit) star = 2 * limit - i;
    for (let j = 1; j <= star; j++) {
      pattern += "*";
    }
    for (let j = 1; j <= space; j++) {
      pattern += " ";
    }
    for (let j = 1; j <= star; j++) {
      pattern += "*";
    }
    if (i < limit) space -= 2;
    else space += 2;
    pattern += "\n";
  }
  console.log(pattern);
}

pattern20(5);

// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *
