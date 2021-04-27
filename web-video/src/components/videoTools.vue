<template>
    <div>
        <video ref="videoPlayer" class="video-js"></video>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue'
import videojs from 'video.js'
// import 'video.js/dist/video-js.css'

export default defineComponent({
    name: 'videoTools',
    props: {
        options: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    setup(props) {
        const player = ref('')
        const videoPlayer = ref(null)
        onMounted(() => {
                player.value = videojs(videoPlayer.value, props.options, function onPlayerReady() {
                    console.log('onPlayerReady', videoPlayer.value, props.options);
                })
        })
        onBeforeUnmount(() => {
            nextTick(() => {
                if (player.value) {
                    player.value.dispose()
                }
            })
        })
        return {
            videoPlayer,
        }
    },
})
</script>
