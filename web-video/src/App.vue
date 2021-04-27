<template>
  <div id="app">
    <znavigation style="height: 10%"></znavigation>
    <router-view></router-view>
  </div>
</template>

<script>
import znavigation from './components/znavigation'

export default {
  name: 'App',
  components: {
    znavigation,
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      const currentPath = window.location.href.slice(1);
      if (this.$route.path !== currentPath) {
        this.$router.push(currentPath);
      }
    }, false);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
