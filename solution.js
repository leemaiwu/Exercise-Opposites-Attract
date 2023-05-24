const lovefunc = (flower1, flower2) => {
  return flower1 % 2 == 0 && flower2 % 2 == 0 ? false : true
}

console.log(lovefunc(1, 4)) // true
console.log(lovefunc(2, 4)) // false