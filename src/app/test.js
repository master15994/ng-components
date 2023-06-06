function pls(a, b) {
  return Math.pow(a, b);
}

function text(str) {
  let words = str.split(" ");

  return words.map((word) => word.split("").reverse().join("")).join(" ");
}

console.log(text("привет всем"));
