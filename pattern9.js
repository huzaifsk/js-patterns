let pattern = "";

function pattern9(limit) {
  for (var i = 0; i <= limit; i++) {
    for (let j = 0; j < limit - i; j++) {
      pattern += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  for (let i = 0; i <= limit; i++) {
    for (var j = 0; j < i; j++) {
      pattern += " ";
    }
    for (var j = 0; j < 2 * limit - (2 * i + 1); j++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  console.log(pattern);
}

pattern9(5);

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
