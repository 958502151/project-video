<template>
    <div class="index">
        <znavigation style="height: 10%"></znavigation>
        <div class="roElcar">
            <el-carousel class="elcar" :interval="4000" type="card">
                <el-carousel-item v-for="item in 6" :key="item">
                    <video @click="route.push('/videoOpen')" class="video" muted="muted" loop="loop" autoplay="autoplay" src="@/assets/login/videoXZSS.mp4"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="videoBody">
            <el-row type="flex" justify="space-around">
              <el-col @mouseover="item.flag = false" @mouseleave="item.flag = true" v-for="(item, index) in arr" :offset="index % 4 === 0 ? 0 : 1" :key="index" :span="5">
                  <el-image v-show="item.flag" :src="arr[0].imgSrc" style="width: 100%; height: 200px" lazy></el-image>
                  <video v-show="!item.flag" muted="muted" loop="loop" style="width: 100%; height: 200px" autoplay="autoplay" src="@/assets/login/videoXZSS.mp4"/>
                  {{`${item.imgSrc}${index}`}}
              </el-col>
            </el-row>
        </div>
        <el-backtop target=".videoBody"></el-backtop>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { reactive } from 'vue'
import znavigation from '../components/znavigation'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'index',
    components:{
        znavigation
    },
    setup() {
        const arr = reactive([
            {
                imgSrc: require('@/assets/login/OIP.jpg'),
                videoSrc: require('@/assets/login/videoXZSS.mp4'),
                flag: true
            },
            {
                imgSrc: require('@/assets/login/jsx2.jpg'),
                videoSrc: require('@/assets/login/videoXZSS.mp4'),
                flag: true
            },
            {
                imgSrc: require('@/assets/login/jsx3.jpg'),
                videoSrc: require('@/assets/login/videoXZSS.mp4'),
                flag: true
            },
            {
                imgSrc: require('@/assets/login/jsx4.jpg'),
                videoSrc: require('@/assets/login/videoXZSS.mp4'),
                flag: true
            },
            {
                imgSrc: require('@/assets/login/jsx5.png'),
                videoSrc: require('@/assets/login/videoXZSS.mp4'),
                flag: true
            },
            {
                imgSrc: require('@/assets/login/jsx6.jpg'),
                videoSrc: require('@/assets/login/videoXZSS.mp4'),
                flag: true
            },
            {
                imgSrc: require('@/assets/login/jsx7.jpg'),
                videoSrc: require('@/assets/login/videoXZSS.mp4'),
                flag: true
            },
        ])
        arr.push(...JSON.parse(JSON.stringify(arr)))
        arr.push(...JSON.parse(JSON.stringify(arr)))
        const route = useRouter();
        return {
            arr,
            route,
        }
    },
})
</script>

<style lang="scss">
.index {
    overflow: hidden;
    height: 100%;
    .roElcar {
        height: 35%;
        display: flex;
        justify-content: center;
        .elcar {
            width: 70%;
            .video {
                width: 100%;
            }
        }
    
    }
    .videoBody {
        padding: 50px 100px;
        height: 460px;
        overflow: auto;
    }
    ::-webkit-scrollbar {
        display: none; /* Chrome Safari 隐藏滚动条操作*/
    }
}
</style>
