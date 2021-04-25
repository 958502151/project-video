<template>
    <div class="index">
        <znavigation></znavigation>
        <div class="roElcar">
            <el-carousel class="elcar" :interval="4000" type="card" height="500px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <video class="video" :width="videoW" muted="muted" loop="loop" autoplay="autoplay" src="../assets/login/videoXZSS.mp4"/>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import znavigation from '../components/znavigation'

export default defineComponent({
    name: 'index',
    components:{
        znavigation
    },
    setup() {
        
    },
})
</script>

<style lang="scss">
.index {
    .roElcar {
        display: flex;
        justify-content: center;
        .elcar {
            width: 70%;
        }
    }
}
</style>
