function stopWatch() {
  let startTime;
  let duration = 0;
  let isRunning = false;

  this.start = function () {
    if (isRunning) {
      throw new Error("Stopwatch has already started!!!");
    }
    isRunning = true;
    startTime = Date.now();
  };

  this.stop = function () {
    if (!isRunning) {
      throw new Error("Stopwatch is not started!!!");
    }
    isRunning = false;
    duration += Date.now() - startTime;
  };

  this.reset = function () {
    duration = 0;
    isRunning = false;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
