<template>
  <nav-bar/>
  <home-page/>
</template>

<script>
import NavBar from './components/Nav-bar.vue'
import HomePage from './components/pages/Home-page.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HomePage
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
