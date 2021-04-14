<template>
    <div class="login">
        <div class="login-box">
            <el-input size="small" v-model="username" placeholder="请输入用户名" prefix-icon="el-icon-user"/>
            <br>
            <el-input size="small" v-model="password" placeholder="请输入密码" suffix-icon="el-icon-view" prefix-icon="el-icon-warning" type="password" label="密码"/>
            <br>
            <el-button plain size="mini" type="success">登录</el-button>
            <el-button plain size="mini" style="margin-left: 30%">注册</el-button>
        </div>
        <div class="backgroundVideo">
            <video class="video" :width="videoW" muted="muted" loop="loop" autoplay="autoplay" src="../assets/login/videoXZSS.mp4"/>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        console.log(document.getElementsByTagName('body'));
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
        return {
            username: ref(''),
            password: ref('')
        }
        // document.getElementsByClassName('video')[0].clientWidth = videoW;
    },
})
</script>

<style lang="scss">
    .login {
        width: 100%;
        text-align: center;
        .backgroundVideo {
            width: 100%;
            .video {
                width: 100%;
            }
        }
        .login-box {
            line-height: 50px;
            margin: 20% 45%;
            z-index: 999;
            position: absolute;
            float: left;
            text-align: center;
            .el-input__inner {
                width: 250px;
            }
        }
    }
</style>