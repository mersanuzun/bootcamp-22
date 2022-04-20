import VueRouter from "vue-router";
import Vue from "vue";
import Home from "@/view/Home";
import Users from "@/view/Users";
import User from "@/view/User";
import UsersParent from "@/view/UsersParent";

Vue.use(VueRouter);

let isAuth = true;

setTimeout(() => {
  isAuth = false;
}, 5000);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "UsersParent",
    component: UsersParent,
    children: [
      {
        path: "",
        name: "Users",
        meta: { title: "bootcamp", isAuthRequired: true },
        component: Users,
      },
      {
        path: ":id",
        name: "User",
        component: User,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const { isAuthRequired, title } = to.meta;

  if (title) {
    window.document.title = title;
  } else {
    window.document.title = "Test";
  }

  if (isAuthRequired && !isAuth) {
    return next({ name: "Home" });
  }

  next();
});

export default router;
