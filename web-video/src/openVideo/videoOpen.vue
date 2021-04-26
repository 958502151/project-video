<template>
    <div class="video-open">
        <znavigation style="height: 10%"></znavigation>
        <div class="videoDiv">
            <el-breadcrumb separator-class="el-icon-minus">
                <el-breadcrumb-item :to="{ path: '/homeIndex' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
            <video-tools :options="videoOptions"/>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import znavigation from '@/components/znavigation'
import videoTools from '@/components/videoTools'
// import { reactive } from 'vue'

export default defineComponent({
    name: 'videoOpen',
    components: {
        znavigation,
        videoTools,
    },
    setup() {
        const videoOptions = {
            autoplay: true,
            controls: true,
            sources: [
                {
                    src:
                        "@/assets/login/videoXZSS.mp4",
                        type: "mp4"
                }
            ]
        }
        return {
            videoOptions,
        }
    },
})
</script>

<style lang="scss">
.video-open {
    .videoDiv{
        background: skyblue;
        height: 75vh;
        width: 70%;
        margin: auto;
        margin-top: 50px;
    }
}
</style>