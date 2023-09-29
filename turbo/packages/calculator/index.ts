import log from "lib-of-turbo";

function add(a: number, b: number) {
  return a + b;
}

function subtract(a: number, b: number) {
  return a - b;
}

log("From calculator package");
log(add(1, 1));
log(subtract(10, 6));

export default {
  add,
  subtract,
};
