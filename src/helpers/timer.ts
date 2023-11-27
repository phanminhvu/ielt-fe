class Timer {
  timer?: ReturnType<typeof setTimeout>;
  constructor() {
    this.timer = undefined;
  }

  debounce(func: () => void, ms: number) {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(func, ms);
  }
}

export default Timer;
