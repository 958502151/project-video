<template>
    <iframe v-show="false" ref="iframe" style="width: 100%; height: 90vh" src="https://v.qq.com/"/>
    <!-- <div v-html="'https://v.qq.com/'"></div> -->
    <!-- <link href="https://v.qq.com/"/> -->
</template>

<script>

import { defineComponent } from '@vue/composition-api'
// import axios from 'axios';
import { onMounted, ref } from 'vue'

export default defineComponent({
    setup() {
        // axios.get('https://v.qq.com/').then(res => {
        //     console.log(res)
        //     debugger
        // })
        const iframe = ref('')
        // document.getElementsByTagName
        onMounted(() => {
            console.log(iframe.value)
        })

        return {
            iframe
        }
    },
})
</script>
