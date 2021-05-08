<template>
    <div class="user-set">
        <span class="title">个人信息设置</span>
        <el-tabs class="elTabs" tab-position="left" style="height: 600px;">
            <el-tab-pane label="基础信息">
                <el-descriptions class="margin-top" title="基础信息" :column="3" border>
                    <template #extra>
                    <el-button type="primary" size="small" @click="handleExit">{{closable ? '取消' : '编辑'}}</el-button>
                    <el-button v-if="closable" type="success" size="small" @click="handleSave">保存</el-button>
                    </template>
                    <el-descriptions-item>
                    <template #label>
                        <i class="el-icon-user"></i>
                        用户名
                    </template>
                    <span v-if="!closable">{{buffUserInfo.userName}}</span>
                    <el-input v-else v-model="buffUserInfo.userName" placeholder="请输入用户名"></el-input>
                    </el-descriptions-item>
                    <el-descriptions-item>
                    <template #label>
                        <i class="el-icon-mobile-phone"></i>
                        手机号
                    </template>
                    <span v-if="!closable">{{buffUserInfo.phone}}</span>
                    <el-input v-else v-model="buffUserInfo.phone" placeholder="请输入手机号"></el-input>
                    </el-descriptions-item>
                    <el-descriptions-item>
                    <template #label>
                        <i class="el-icon-location-outline"></i>
                        居住地
                    </template>
                    <span v-if="!closable">{{buffUserInfo.home}}</span>
                    <el-input v-else v-model="buffUserInfo.home" placeholder="请输入居住地"></el-input>
                    </el-descriptions-item>
                    <el-descriptions-item>
                    <template #label>
                        <i class="el-icon-tickets"></i>
                        备注
                    </template>
                    <el-tag size="small">学校</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item>
                    <template #label>
                        <i class="el-icon-office-building"></i>
                        联系地址
                    </template>
                    <span v-if="!closable">{{buffUserInfo.adress}}</span>
                    <el-input v-else v-model="buffUserInfo.adress" placeholder="请输入联系地址"></el-input>
                    </el-descriptions-item>
                    <el-descriptions-item>
                    <template #label>
                        <i class="el-icon-office-building"></i>
                        生日
                    </template>
                    <span v-if="!closable">{{buffUserInfo.brithDay}}</span>
                    <el-input v-else v-model="buffUserInfo.brithDay" placeholder="请输入生日"></el-input>
                    </el-descriptions-item>
                    <el-descriptions-item>
                    <template #label>
                        <i class="el-icon-office-building"></i>
                        最爱类型
                    </template>
                    <el-tag @close="handleClose(tag)" v-for="(item, index) in buffLoveList" :key="index" effect="dark" :type="item.type" size="small" :closable="closable" >{{item.name}}</el-tag>
                    <el-input
                        class="input-new-tag"
                        v-if="inputVisible && closable"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter="handleInputConfirm"
                        @blur="handleInputConfirm"
                        >
                    </el-input>
                    <el-button v-else-if="!inputVisible && closable" class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
                    </el-descriptions-item>
                </el-descriptions>
            </el-tab-pane>
            <el-tab-pane label="高级信息">
                <span>高级信息</span>
                <br/>
                <el-button style="margin-top: 30px; margin-left: 30px" size="small" @click="changePassword">修改密码</el-button>
                <br/>
                <span>剩余内容待开发</span>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { reactive, ref, nextTick } from 'vue'
import usURLAxios from '../../hooks/useAxios'

export default defineComponent({
    name: "userSet",
    setup() {
        let loveList = [{name: '惊悚', type: 'success'},{name: '热血', type: 'info'},{name: '悬疑', type: 'danger'},{name: '犯罪', type: 'warning'}];
        let buffLoveList = ref(JSON.parse(JSON.stringify(loveList)));
        const tagType = ['success','info','warning','danger',''];
        const closable = reactive(ref(false));
        const handleExit = (() => {
            closable.value = !closable.value;
            if (!closable.value) {
                buffLoveList.value = JSON.parse(JSON.stringify(loveList));
                buffUserInfo.value = JSON.parse(JSON.stringify(userInfo));
            }
        })
        const inputValue = reactive(ref(null));
        const inputVisible = reactive(ref(false));
        // console.log(isReactive(inputValue))

        const handleInputConfirm = (() => {
            let inputValues = inputValue.value;
            if (inputValues) {
                buffLoveList.value.push({name: inputValues, type: tagType[parseInt(Math.random()*4)]});
            }
            inputVisible.value = false;
            inputValue.value = '';
        })
        const saveTagInput = ref(null);
        // const input = ref(null)

        const showInput = (() => {
            inputVisible.value = true;
            nextTick(() => {
                console.log(saveTagInput);
            });
        })

        const handleClose = ((tag) => {
            buffLoveList.value.splice(buffLoveList.value.indexOf(tag), 1);
        })

        let userInfo = {
            userName: 'kooriookami',
            phone: '18100000000',
            home: '苏州市',
            adress: '江苏省苏州市吴中区吴中大道 1188 号',
            brithDay: '2月12日'
        };
        let buffUserInfo = ref(JSON.parse(JSON.stringify(userInfo)));
        const handleSave = (() => {
            closable.value = false;
            loveList = JSON.parse(JSON.stringify({...buffLoveList}._rawValue));
            userInfo = JSON.parse(JSON.stringify({...buffUserInfo}._rawValue));
        })
        const changePassword = (() => {
            const { result, loading, loaded, error } = usURLAxios('/test', 'post');
            console.log( result, loading, loaded, error );
        })

        return {
            buffLoveList,
            closable,
            handleExit,
            handleInputConfirm,
            inputVisible,
            inputValue,
            showInput,
            handleClose,
            buffUserInfo,
            handleSave,
            changePassword
        }
    },
})
</script>

<style lang="scss">
.user-set {
    padding: 40px 80px;
    .title {
        font-size: 24px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
    }
    .elTabs {
        margin-top: 50px;
            .input-new-tag {
                width: 90px;
                margin-left: 10px;
                vertical-align: bottom;
            }
    }
}
</style>
