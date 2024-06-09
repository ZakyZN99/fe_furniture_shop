<template>
  <!-- <view-product-page-vue/> -->
  <!-- <home-page/> -->
  <detail-product-page/>
</template>

<script>
import DetailProductPage from './components/pages/DetailProduct-page.vue'
// import ViewProductPageVue from './components/pages/ViewProduct-page.vue'
// import HomePage from './components/pages/Home-page.vue'


export default {
  name: 'App',
  components: {
    DetailProductPage
    // HomePage
    // ViewProductPageVue

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

#app {
  font-family:  'Playfair Display', 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
