let pattern = "";

function pattern(limit) {
  for (var i = 0; i < limit; i++) {
    for (var j = 0; j < limit - i; j++) {
      pattern += " ";
    }
    //characters
    let charCode = "A".charCodeAt(0) + i;
    for (let ch = 0; ch <= i; ch++) {
      pattern += String.fromCharCode(charCode) + " ";
      charCode += 1;
    }
    for (var j = 0; j < limit - i; j++) {
      pattern += " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

pattern(5);

//     A
//    B C
//   C D E
//  D E F G
// E F G H I
