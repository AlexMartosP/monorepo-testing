import log from "lib-of-npm";
import counter from "counter-of-npm";
import calculator from "calculator-of-npm";

// Counter
log(counter.getCount());
counter.count();
counter.count();
log(counter.getCount());

// Calculator
log(calculator.add(2, 3));
log(calculator.subtract(20, 10));
