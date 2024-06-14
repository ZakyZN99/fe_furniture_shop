import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/pages/Home-page.vue";
import ViewProductPageVue from './components/pages/ViewProduct-page.vue';
import AboutPageVue from './components/pages/About-page.vue';

// export default new Router({
//     mode: 'history',
//     routes: [
//         { path: '/', name: 'HomePage', component: HomePage },
//         { path: '/products', name: 'ViewProductPageVue', component: ViewProductPageVue },
//     ],
// });
const routes = [
  { path: "/", component: HomePage },
  {
    path: "/products",
    component: ViewProductPageVue,
  },
  {
    path: "/test",
    component: AboutPageVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
