let pattern = "";
function pattern18(limit) {
  for (let i = 0; i <= limit; i++) {
    for (let ch = limit - i; ch <= limit; ch++) {
      pattern += String.fromCharCode("A".charCodeAt(0) + ch);
    }
    pattern += "\n";
  }
  console.log(pattern);
}

pattern18(5);

// F
// EF
// DEF
// CDEF
// BCDEF
// ABCDEF
