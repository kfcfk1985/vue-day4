import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

//ok
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,   //process.env.BASE_URL =  /
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/about",
      name: "about",
      meta: {
        auth: true    //控制是否需要登录信息
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

//ok 路由守卫
router.beforeEach((to, from, next) => {
  console.log("路由全局守卫：before each,本来要到",to)
  if (to.meta.auth) {
    // 需要登录
    const token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      next({
        path: "/login",               //没有登陆，重定向到login页面
        query: { redirect: to.path }  //带上本来要跳转的参数
      });
    }
  } else { // 不需要登录验证
    next()
  }
});

export default router;
