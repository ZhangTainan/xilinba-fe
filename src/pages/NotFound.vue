<template>
    <el-row>
        <el-col :sm="12" :lg="6">
            <el-result icon="warning" title="404 NOT FOUND" sub-title="温馨提示,您要找的页面走丢了~">
                <template #extra>
                    <el-button type="primary" @click="$router.go(-1)">返回</el-button>
                </template>
            </el-result>
        </el-col>
    </el-row>
</template>
