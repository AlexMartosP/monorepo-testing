import log from "lib-of-pnpm";
import counter from "counter-of-pnpm";
import calculator from "calculator-of-pnpm";

// Counter
log(counter.getCount());
counter.count();
counter.count();
log(counter.getCount());

// Calculator
log(calculator.add(2, 3));
log(calculator.subtract(20, 10));
