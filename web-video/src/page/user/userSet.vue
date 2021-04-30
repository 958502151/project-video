<template>
    <div class="user-set">
        <span class="title">个人信息设置</span>
        <el-tabs class="elTabs" tab-position="left" style="height: 200px;">
            <el-tab-pane label="基础信息">
                <el-descriptions class="margin-top" title="基础信息" :column="3" border>
                    <template #extra>
                    <el-button type="primary" size="small" @click="handleExit">编辑</el-button>
                    </template>
                    <el-descriptions-item>
                    <template #label>
                        <i class="el-icon-user"></i>
                        用户名
                    </template>
                    kooriookami
                    </el-descriptions-item>
                    <el-descriptions-item>
                    <template #label>
                        <i class="el-icon-mobile-phone"></i>
                        手机号
                    </template>
                    18100000000
                    </el-descriptions-item>
                    <el-descriptions-item>
                    <template #label>
                        <i class="el-icon-location-outline"></i>
                        居住地
                    </template>
                    苏州市
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
                    江苏省苏州市吴中区吴中大道 1188 号
                    </el-descriptions-item>
                    <el-descriptions-item>
                    <template #label>
                        <i class="el-icon-office-building"></i>
                        生日
                    </template>
                    2月12日
                    </el-descriptions-item>
                    <el-descriptions-item>
                    <template #label>
                        <i class="el-icon-office-building"></i>
                        最爱类型
                    </template>
                    <el-tag @close="handleClose(tag)" v-for="(item, index) in loveList" :key="index" effect="dark" :type="item.type" size="small" :closable="closable" >{{item.name}}</el-tag>
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
            <el-tab-pane label="高级信息"></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { reactive, ref, nextTick } from 'vue'

export default defineComponent({
    name: "userSet",
    setup() {
        const loveList = ref([{name: '惊悚', type: 'success'},{name: '热血', type: 'info'},{name: '悬疑', type: 'danger'},{name: '犯罪', type: 'warning'}])
        const tagType = ['success','info','warning','danger','']
        const closable = reactive(ref(false))
        const handleExit = (() => {
            closable.value = !closable.value
        })
        const inputValue = reactive(ref(null))
        const inputVisible = reactive(ref(false))
        // console.log(isReactive(inputValue))

        const handleInputConfirm = (() => {
            let inputValues = inputValue.value;
            if (inputValues) {
                loveList.value.push({name: inputValues, type: tagType[parseInt(Math.random()*4)]});
            }
            inputVisible.value = false;
            inputValue.value = '';
        })
        const saveTagInput = ref(null)
        // const input = ref(null)

        const showInput = (() => {
            inputVisible.value = true;
            nextTick(() => {
                console.log(saveTagInput);
            });
        })

        const handleClose = ((tag) => {
            loveList.value.splice(loveList.value.indexOf(tag), 1);
        })

        return {
            loveList,
            closable,
            handleExit,
            handleInputConfirm,
            inputVisible,
            inputValue,
            showInput,
            handleClose
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
