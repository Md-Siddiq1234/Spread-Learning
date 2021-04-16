const counters = document.querySelectorAll(".counter");
const counter1 = {
  start: 0,
  end: 844,
  interval: 43,
};

const counter2 = {
  start: 0,
  end: 1240,
  interval: 55,
};

const counter3 = {
  start: 0,
  end: 1940,
  interval: 95,
};

const counter4 = {
  start: 0,
  end: 67,
  interval: 3,
};

const roundToTwo = (num) => {
  return +(Math.round(num + "e+2") + "e-2");
};

const appearOptions = {
  threshold: 0,
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      const { target } = entry.target.dataset;
      let whichCounter = {};
      switch (target) {
        case "counter1":
          whichCounter = counter1;
          break;
        case "counter2":
          whichCounter = counter2;
          break;
        case "counter3":
          whichCounter = counter3;
          break;
        case "counter4":
          whichCounter = counter4;
          break;
      }
      setInterval(() => {
        if (whichCounter.start > whichCounter.end) {
          return;
        } else {
          entry.target.textContent = whichCounter.start;
          whichCounter.start += whichCounter.interval;
          whichCounter.start = roundToTwo(whichCounter.start);
        }
      }, 100);
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

counters.forEach((counter) => {
  appearOnScroll.observe(counter);
});

// counter part end -----------------
