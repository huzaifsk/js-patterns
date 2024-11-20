let pattern = "";

function pattern17(limit) {
  for (var i = 0; i < limit; i++) {
    for (var j = 0; j < limit - i; j++) {
      pattern += " ";
    }
    //characters
    for (let j = 0; j <= i; j++) {
      pattern += String.fromCharCode("A".charCodeAt(0) + j);
    }
    for (let j = i - 1; j >= 0; j--) {
      pattern += String.fromCharCode("A".charCodeAt(0) + j);
    }

    for (var j = 0; j < limit - i; j++) {
      pattern += " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

pattern17(5);

//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA
