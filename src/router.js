import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/pages/Home-page.vue";
import ViewProductPageVue from './components/pages/ViewProduct-page.vue';
import DetailProductPage from './components/pages/DetailProduct-page.vue'
import About from './components/pages/About-page.vue';
import Contact from './components/pages/Contact-page.vue';
import CartsPageVue from './components/pages/Carts-page.vue';
import PaymentPageVue from './components/pages/Payment-page.vue';
import PaymentMethodPageVue from './components/pages/PaymentMethod-page.vue';

const routes = [
  { path: "/", name:'HomePageVue', component: HomePage },
  { path: "/products", name: 'ViewProductPageVue', component: ViewProductPageVue },
  { path: "/products/:id", name: 'DetailProductPage', component: DetailProductPage },
  { path: "/about", component: About },
  { path: "/contact", name: 'ContactPage', component: Contact },
  { path: "/cart", name: 'CartsPageVue', component: CartsPageVue },
  { path: "/payment", name: 'PaymentPageVue', component: PaymentPageVue },
  { path: "/payment-method", name: 'PaymentMethodPageVue', props: route => ({ cartTotal: route.params.cartTotal }), component: PaymentMethodPageVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // If there's a saved scroll position, use it
    } else {
      return { top: 0 }; // Otherwise, scroll to the top
    }
  },
});

export default router;
