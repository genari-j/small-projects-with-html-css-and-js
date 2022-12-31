let first = "Victor";
let middle = "Oliveira";
let last = "Genari";

function myName(first, middle, last, deonde, type) {
  if (deonde === "web") {
    const result = `${first} ${middle} ${last}`;
    return result;
  }

  if (deonde === "desktop") {
    const result = `${first} ${middle} ${last} 1`;
    return result;
  }

  if (deonde === "celular") {
    if (type === "ios") {
      const result = `${first} ${middle} ${last} celular 2`;
      return result;
    }
    if (type === "android") {
      const result = `${first} ${middle} ${last} celular 3`;
      return result;
    }
  }
}

const web = myName(first, middle, last, "web");
const desktop = myName(first, middle, last, "desktop");
const android = myName(first, middle, last, "celular", "android");

console.log(web, desktop, android);

function soma(number1, number2) {
  const result = number1 + number2;
  return result;
}

const result = soma(5, 5);
console.log(result);
