<template>
    <div class="details-page">
        <el-page-header @back="goBack" :content="type">
        </el-page-header>
        <el-tabs class="tabs" tab-position="right">
            <el-tab-pane v-for="(item, index) in tabList" :key="index" :label="item.label">{{item.context}}
                <el-switch
                    style="display: inline; margin-left: 30px"
                    v-model="value"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    :active-text="item.label + '↑'"
                    :inactive-text="item.label + '↓'"
                    >
                </el-switch>
            </el-tab-pane>
            <div v-if="!(type === '惊悚')" class="tabsBody">
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
        </el-tabs>
        <div v-if="type === '惊悚'">
            <el-empty class="empty">
                <el-button type="primary" @click="goBack">返回首页</el-button>
            </el-empty>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useRoute, useRouter } from "vue-router"
import { reactive, watchEffect, ref } from "vue"

export default defineComponent({
    name: 'detailsPage',
    setup() {
        const route = useRoute()
        const router = useRouter()
        const type = ref('')
        const value = reactive(ref(false))
        const tabList = [
            {
                label: '按热度',
                context: '热度',
            },
            {
                label: '按评分',
                context: '评分',
            },
            {
                label: '按时间',
                context: '时间',
            },
            {
                label: '开发者推荐',
                context: '开发者推荐',
            }
        ]
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

        watchEffect(() => {
            type.value = reactive(route.params.type)
        })

        const goBack = (() => {
            router.push('/homeIndex')
        })
        return {
            type,
            goBack,
            tabList,
            value,
            arr,
        }
    },
})
</script>

<style lang="scss">
    .details-page {
        padding: 60px 120px;
        .tabs {
            margin-top: 30px;
        }
    }
</style>
