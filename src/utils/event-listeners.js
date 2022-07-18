import { DIRECTIONS } from "../constants";

const debounce = (fn) => {
  let isRunning = false;
  return function (...args) {
    if (isRunning) {
      return;
    } else {
      isRunning = true;
      setTimeout(() => {
        fn(...args);
        isRunning = false;
      }, 200);
    }
  };
};

function eventHandler(e) {
  if (e.key === "ArrowUp") {
    if (DIRECTIONS.current !== DIRECTIONS.down) {
      DIRECTIONS.setDirection(DIRECTIONS.up);
    }
  } else if (e.key === "ArrowDown") {
    if (DIRECTIONS.current !== DIRECTIONS.up) {
      DIRECTIONS.setDirection(DIRECTIONS.down);
    }
  } else if (e.key === "ArrowLeft") {
    if (DIRECTIONS.current !== DIRECTIONS.right) {
      DIRECTIONS.setDirection(DIRECTIONS.left);
    }
  } else if (e.key === "ArrowRight") {
    if (DIRECTIONS.current !== DIRECTIONS.left) {
      DIRECTIONS.setDirection(DIRECTIONS.right);
    }
  }
}

const debouncedEventHandler = debounce(eventHandler);

export const eventListeners = () => {
  document.addEventListener("keydown", debouncedEventHandler);
};
