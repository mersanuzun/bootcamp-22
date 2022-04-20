export default {
  bind(el, options) {
    const { arg: eventName, value: handler } = options;

    el.addEventListener(eventName, handler);
  },
  /*inserted(el, options) {
    console.log("inserted", el, options);
  },*/
};
