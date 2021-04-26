<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
