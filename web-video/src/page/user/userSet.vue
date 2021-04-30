<template>
    <div class="user-set">
        <span class="title">个人信息设置</span>
        <el-tabs class="elTabs" tab-position="left" style="height: 200px;">
            <el-tab-pane label="基础信息">
                <el-descriptions class="margin-top" title="带边框列表" :column="3" border>
                    <template #extra>
                    <el-button type="primary" size="small">操作</el-button>
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
                </el-descriptions>
            </el-tab-pane>
            <el-tab-pane label="高级信息"></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: "userSet",
    setup() {
        
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
    }
}
</style>
