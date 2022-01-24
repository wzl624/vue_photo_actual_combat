import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/Login.vue';
import Photo from '../views/Photo.vue';
import store from '../store'
//import Details from "../views/Details.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/photo",
    name: "Photo",
    component: Photo,
    meta:{
      isAuth:true,
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/details/:id",
    name: "Details",
    component: ()=>import(/* webpackChunkName: "details" */ "../views/Details"),
    props:true,
    meta:{
      isAuth:true,
    }
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to,from,next)=>{
  if (to.meta.isAuth) {
    const token = store.state.token;
    if (token) {
      next();
    }else{
      next({
        name:"Login",
      })
    }
  }else{
    next();
  }
})

export default router;
