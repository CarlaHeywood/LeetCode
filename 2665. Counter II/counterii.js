/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  var counter = init;
  return {
    increment: function () {
      return (counter = counter + 1);
    },
    reset: function () {
      counter = init;
      return counter;
    },
    decrement: function () {
      return (counter = counter - 1);
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
