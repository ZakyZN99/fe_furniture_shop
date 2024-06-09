import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/pages/Home-page.vue';
import ViewProductPageVue from '@/components/pages/ViewProduct-page.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'HomePage', component: HomePage },
        { path: '/products', name: 'ViewProductPageVue', component: ViewProductPageVue },
    ],
});