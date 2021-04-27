<template>
    <div class="video-open">
        <!-- <znavigation style="height: 10%"></znavigation> -->
        <div class="videoDiv">
            <el-breadcrumb class="nginx" separator-class="el-icon-minus">
                <el-breadcrumb-item :to="{ path: '/homeIndex' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
            <video-tools class="videoPlayer" :options="videoOptions"/>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
// import znavigation from '@/components/znavigation'
import videoTools from '@/components/videoTools'
import { useRoute } from "vue-router"
// import { reactive } from 'vue'

export default defineComponent({
    name: 'videoOpen',
    components: {
        // znavigation,
        videoTools,
    },
    setup() {
        const route = useRoute()
        // const m = require(`${route.query.videoSrc}`);
        const videoOptions = {
            autoplay: false,
            controls: true,
            fluid: true,
            controlBar: {
                children: [
                {name: 'playToggle'}, // 播放按钮
                {name: 'currentTimeDisplay'}, // 当前已播放时间
                {name: 'progressControl'}, // 播放进度条
                {name: 'durationDisplay'}, // 总时间
                { // 倍数播放
                    name: 'playbackRateMenuButton',
                    'playbackRates': [0.5, 1, 1.5, 2, 2.5]
                },
                {
                    name: 'volumePanel', // 音量控制
                    inline: false, // 不使用水平方式
                },
                {name: 'FullscreenToggle'} // 全屏
                ]
            },
            sources: [
                {
                    src:
                        route.params.videoSrc,
                        type: "video/mp4"
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
        // background: skyblue;
        height: 75vh;
        width: 65%;
        margin: auto;
        margin-top: 50px;
        .nginx {
            font-size: 20px;
        }
        .videoPlayer {
            // width: 100%;
            margin-top: 20px;
        }
    }
}
</style>