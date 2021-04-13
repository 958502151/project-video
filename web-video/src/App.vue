<template>
  <login>
    <router-view></router-view>
  </login>
</template>

<script>
import login from './login/login'

export default {
  name: 'App',
  components: {
    login,
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
  text-align: center;
  color: #2c3e50;
}
</style>
