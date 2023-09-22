<template>
  <div id="app">
    <znavigation v-if="show" style="height: 10%"></znavigation>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import znavigation from './components/znavigation'
import { reactive, watch, ref } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {
    znavigation,
  },
  setup() {
    const show = ref(reactive(false))
    const route = useRoute()
    watch(() => route.path,() => {
      if (window.location.pathname !== '/login') show.value = true
      else show.value = false
    })
    return {
      show,
    }
  },
})
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
