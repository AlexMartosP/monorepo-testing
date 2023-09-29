import log from "lib-of-npm";

let currentCount = 0;

function count() {
  currentCount += 1;
}

function getCount() {
  return currentCount;
}

count();
count();

log("From counter package");
log(getCount());

export default { count, getCount };
