let pattern = "";

function pattern7(limit) {
  for (var i = 0; i < limit; i++) {
    for (var j = 0; j < limit - i; j++) {
      pattern += " ";
    }
    for (var j = 0; j < 2 * i + 1; j++) {
      pattern += "*";
    }
    for (var j = 0; j < limit - i; j++) {
      pattern += " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
pattern7(5);

//     *
//    ***
//   *****
//  *******
// *********
