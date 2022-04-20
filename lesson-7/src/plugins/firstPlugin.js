import theme from "@/directives/theme";
import myOn from "@/directives/myOn";

const tr = {
  hello: "selamlar",
  computer: "bilgisayar",
  rate: "Your rate is",
};

export default {
  install(Vue) {
    Vue.directive("theme", theme);
    Vue.directive("myOn", myOn);

    Vue.myGlobalMethod = function () {
      console.log("myGlobalMethod");
    };

    Vue.prototype.$translate = (path) => {
      const translation = tr[path];

      if (!translation) {
        console.warn(`There is no translation`);
      }

      return translation ? translation : path;
    };
  },
};
