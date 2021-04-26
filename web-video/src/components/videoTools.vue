<template>
    <div>
        <video ref="videoPlayer" class="video-js"></video>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import videojs from 'video.js';

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
            debugger
                player.value = videojs(videoPlayer.value, props.options, function onPlayerReady() {
                    console.log('onPlayerReady', videoPlayer.value, props.options);
                })
        })
        onBeforeUnmount(() => {
            if (player.value) {
                player.value.dispose()
            }
        })
        return {
            videoPlayer,
        }
    },
})
</script>
