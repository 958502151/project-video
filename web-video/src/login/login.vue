<template>
    <div class="login">
        <div class="login-box">
            <el-input size="small" v-model="username" placeholder="请输入用户名" prefix-icon="el-icon-user"/>
            <br>
            <el-input size="small" v-model="password" placeholder="请输入密码" showPassword prefix-icon="el-icon-warning" type="password" label="密码"/>
            <br>
            <el-button plain size="mini" type="success" @click="loginIng">登录</el-button>
            <el-button plain size="mini" style="margin-left: 30%">注册</el-button>
        </div>
        <div class="backgroundVideo">
            <video class="video" :width="videoW" muted="muted" loop="loop" autoplay="autoplay" src="@/assets/login/videoXZSS.mp4"/>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'login',
    setup() {
        console.log(document.getElementsByTagName('body'));
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
        const route = useRouter();

        return {
            username: ref(''),
            password: ref(''),
            route
        }
        // document.getElementsByClassName('video')[0].clientWidth = videoW;
    },
    methods: {
        loginIng() {
            if (this.username === 'admin' && this.password === 'admin') {
                sessionStorage.setItem('login', true);
                this.route.push('/homeIndex')
            }
        },
    }
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