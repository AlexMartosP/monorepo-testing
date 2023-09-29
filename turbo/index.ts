import log from "lib-of-turbo";
import counter from "counter-of-turbo";
import calculator from "calculator-of-turbo";

// Counter
log(counter.getCount());
counter.count();
counter.count();
log(counter.getCount());

// Calculator
log(calculator.add(2, 3));
log(calculator.subtract(20, 10));
