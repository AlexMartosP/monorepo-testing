import log from "lib-of-pnpm";

let currentCount = 0;

function count() {
  currentCount += 1;
}

function getCount() {
  return currentCount;
}

count();
count();
count();

log("From counter package");
log(getCount());

export default { count, getCount };
