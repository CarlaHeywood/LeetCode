type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): ReturnObj {
  let counter: number = init;
  return {
    increment: function (): number {
      return (counter = counter + 1);
    },
    reset: function (): number {
      counter = init;
      return counter;
    },
    decrement: function (): number {
      return (counter = counter - 1);
    },
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
