export default {
  data() {
    return {
      value: 0,
    };
  },

  methods: {
    onIncr() {
      this.value += 1;
    },
  },

  /*created() {
    console.log("mixin hook");
  },*/
};
