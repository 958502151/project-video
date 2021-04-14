<template>
    <div class="login">
        <div class="login-box">
            <span>用户名:<input/></span>
            <br>
            <span>密<span style="opacity: 0;">空</span>码:<input type="password"/></span>
            <br>
            <button type="submit">登录</button>
            <button style="margin-left: 30%">注册</button>
        </div>
        <div class="backgroundVideo">
            <video class="video" :width="videoW" muted="muted" loop="loop" autoplay="autoplay" src="../assets/login/videoXZSS.mp4"/>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        // console.log(document.getElementsByTagName('body'));
        // const videoW = document.getElementsByTagName('body')[0].clientWidth - 280;
        return {
            // videoW,
        }
        // document.getElementsByClassName('video')[0].clientWidth = videoW;
    },
})
</script>

<style lang="scss">
    .login {
        width: 100%;
        .backgroundVideo {
            width: 100%;
            .video {
                width: 100%;
            }
        }
        .login-box {
            line-height: 40px;
            margin: 20% 40%;
            z-index: 999;
            position: absolute;
            float: left;
            text-align: center;
        }
    }
</style>