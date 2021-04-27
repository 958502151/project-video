<template>
    <div class="index">
        <!-- <znavigation style="height: 10%"></znavigation> -->
        <div class="roElcar">
            <el-carousel class="elcar" :interval="4000" type="card">
                <el-carousel-item v-for="item in 6" :key="item">
                    <video @click="route.push({name: 'videoOpen', params: { videoSrc: require('@/assets/login/videoXZSS.mp4') }})" class="video" muted="muted" loop="loop" autoplay="autoplay" src="@/assets/login/videoXZSS.mp4"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="videoBody">
            <el-row type="flex" justify="space-around">
              <el-col style="margin-top: 50px" @mouseover="item.flag = false" @mouseleave="item.flag = true" v-for="(item, index) in arr" :offset="index % 4 === 0 ? 0 : 1" :key="index" :span="5">
                  <el-card shadow="hover">
                    <el-image v-show="item.flag" :src="arr[0].imgSrc" style="width: 100%; height: 200px" lazy></el-image>
                    <video @click="route.push({name: 'videoOpen', params: { videoSrc: item.videoSrc }})" v-show="!item.flag" muted="muted" loop="loop" style="width: 100%; height: 200px" autoplay="autoplay" :src="item.videoSrc"/>
                    {{item.name}}<span style="margin-right: auto">———{{item.actor}}</span>
                  </el-card>
              </el-col>
            </el-row>
        </div>
        <el-backtop target=".videoBody"></el-backtop>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { reactive } from 'vue'
// import znavigation from '../components/znavigation'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'index',
    components:{
        // znavigation
    },
    setup() {
        const arr = reactive([
            {
                name: '《都挺好》',
                actor: 'Tom Jeff, Arbile',
                imgSrc: require('@/assets/login/OIP.jpg'),
                videoSrc: require('@/assets/login/videoXZSS.mp4'),
                flag: true
                
            },
            {
                name: '《test》',
                actor: 'Jim Len',
                imgSrc: require('@/assets/login/jsx2.jpg'),
                videoSrc: require('@/assets/login/videoXZSS.mp4'),
                flag: true
            },
            {
                name: '《stay with me》',
                actor: 'Maran, Small Boy',
                imgSrc: require('@/assets/login/jsx3.jpg'),
                videoSrc: require('@/assets/login/videoXZSS.mp4'),
                flag: true
            },
            {
                name: '《six》',
                actor: '盲仔, 托儿索',
                imgSrc: require('@/assets/login/jsx4.jpg'),
                videoSrc: require('@/assets/login/videoXZSS.mp4'),
                flag: true
            },
            {
                name: '《moneny》',
                actor: '儿童劫, 红领烬',
                imgSrc: require('@/assets/login/jsx5.png'),
                videoSrc: require('@/assets/login/videoXZSS.mp4'),
                flag: true
            },
            {
                name: '《just so like》',
                actor: '艾玛·沃特森, 安妮·海瑟薇',
                imgSrc: require('@/assets/login/jsx6.jpg'),
                videoSrc: require('@/assets/login/videoXZSS.mp4'),
                flag: true
            },
            {
                name: '《go back》',
                actor: '艾琳娜, 尼古拉斯·凯奇',
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
