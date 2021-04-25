<template>
  <div class="znavigation">
    <el-menu
      default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu mode="horizontal" index="1">
        <template #title>选项1</template>
        <el-menu-item index="1-1">选项1-1</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">选项2</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { defineComponent} from '@vue/composition-api'

export default defineComponent({
    name: 'znavigation',
    setup() {
        return {
            activeIndex: '1',
        }
    },
})
</script>

<style lang="scss">

</style>