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
      <span class="logout" style="color: white;">
        <el-dropdown>
        <span style="cursor: pointer; color: white;">用户信息<el-icon class="el-icon-user" /></span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人设置</el-dropdown-item>
              <el-dropdown-item>消息</el-dropdown-item>
              <el-dropdown-item>历史记录</el-dropdown-item>
              <el-dropdown-item disabled>收藏</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        <span style="cursor: pointer;">注销 <el-icon class="el-icon-switch-button" /></span>
      </span>
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
.znavigation {
  .el-menu-demo {
    display: flex;
    align-items: baseline;
    padding-right: 20px;
    .logout {
      margin-left: auto;
    }
  }
}
</style>