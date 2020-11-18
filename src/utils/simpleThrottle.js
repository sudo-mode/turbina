export default function throttle(callback, limit) {
  let waiting = false;
  return (...rest) => {
    if (!waiting) {
      callback.apply(this, rest);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}
