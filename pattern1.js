let pattern = "";
let variable = "*";

function pattern1(limitNumber) {
  for (let i = 1; i <= limitNumber; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += variable + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

pattern1(5);

// *
// * *
// * * *
// * * * *
// * * * * *
