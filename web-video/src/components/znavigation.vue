<template>
  <div class="znavigation">
    <el-menu
      :router="true"
      default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1" @click="route.push('/homeIndex')">首页</el-menu-item>
      <el-submenu mode="horizontal" index="2">
        <template #title>电视剧</template>
        <el-menu-item style="color: gray;" :route="{name: 'detailsPage', params: {type: item}}" v-for="(item, index) in list" :key="index" :index="`2-${index + 1}`">{{item}}</el-menu-item>
      </el-submenu>
      <el-submenu mode="horizontal" index="3">
        <template #title>电影</template>
        <el-menu-item style="color: gray;" :route="{name: 'detailsPage', params: {type: item}}" v-for="(item, index) in list" :key="index" :index="`3-${index + 1}`">{{item}}</el-menu-item>
      </el-submenu>
      <el-submenu mode="horizontal" index="4">
        <template #title>短视频</template>
        <el-menu-item style="color: gray;" :route="{name: 'detailsPage', params: {type: item}}" v-for="(item, index) in list" :key="index" :index="`4-${index + 1}`">{{item}}</el-menu-item>
      </el-submenu>
      <el-menu-item :route="{name: 'canvasTest'}" index="5">动画</el-menu-item>
      <span class="logout" style="color: white;">
        <el-dropdown>
        <span style="cursor: pointer; color: white;">用户信息<el-icon class="el-icon-user" /></span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="route.push('/userSet')">个人设置</el-dropdown-item>
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
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'znavigation',
    setup() {
      const list = ['惊悚','动作','恐怖','喜剧','古装','玄幻','魔幻','犯罪','悬疑','记录','热血']
      const route = useRouter()
        return {
            activeIndex: '1',
            list,
            route,
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
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }
  .el-menu-item:hover {
    // opacity: 0.3;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);;
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    animation-direction: reverse;
  }
  .el-menu-item:focus {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);;
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    animation-direction: reverse;
  }
  .el-submenu__title:hover {
    // opacity: 0.3;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    animation-direction: reverse;
  }
  .el-submenu__title:focus {
    // opacity: 0.3;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    animation-direction: reverse;
  }
  .el-menu--popup {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

</style>