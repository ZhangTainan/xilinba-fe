<template>
  <div>
    <el-row style="min-height: 100vh;">
      <el-col :lg="16" :md="12" class="flex justify-center flex-col items-center">
        <div class="font-bold text-5xl text-red-400 mb-5">欢迎来到
          <i class="text-6xl font-serif text-amber-500">西林吧</i>
        </div>
        <div class="text-3xl font-mono text-light-600 mb-6">在这里你可以为所欲为!</div>
        <!-- <el-image style="width: 600px; height: 400px" src="src/assets/imgs/swfu01.jpg" fit="fit" loading="lazy" /> -->
      </el-col>
      <el-col :lg="8" :md="12" class=" flex justify-center flex-col items-center">
        <div class="font-bold text-5xl text-stone-900 ">欢迎回家</div>
        <div class="flex items-center justify-center my-5 text-2xl text-lime-500">
          <span class="h-[1px] w-16 bg-lime-500 trans"></span>
          <span class="">用户名密码登录</span>
          <span class="h-[1px] w-16 bg-lime-500"></span>
        </div>
        <el-form ref="formRef" :model="form" :rules="rules" class="flex justify-center flex-col items-center">
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名" clearable :prefix-icon="UserFilled"
              class=" w-80 h-10" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" type="password" placeholder="请输入密码" show-password :prefix-icon="Lock"
              class=" w-80 h-10" />
          </el-form-item>
          <div class="my-2">
            <el-button type="primary" round @click="onSubmit">登 录</el-button>
            <el-button type="warning" round @click="toRegister">注 册</el-button>
          </div>
        </el-form>
      </el-col>
    </el-row>
  </div>

</template>

<script  setup>
import { ref, reactive } from 'vue'
import { UserFilled, Lock } from '@element-plus/icons-vue'
import { login } from '@/api/manager.js'
import { useRouter } from 'vue-router'
const router = useRouter()

const formRef = ref(null);
const form = reactive({
  username: "",
  password: ""
});
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    // { min: 8, max: 32, message: '用户名长度应在8-32之间', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ]
});
const onSubmit = () => {
  formRef.value.validate((isValid) => {
    if (!isValid) {
      return "error"
    }
    console.log("登录");
    login(form.username, form.password).then(
      res => {
        console.log(res.data);
        if (res.data === "error") {
          ElMessage({
            message: '用户名或密码错误！', // 提示内容
            grouping: true, //是否叠加
            type: 'error',   // 类型
            duration: 3000,  // 3秒自动关闭,0不关闭
            showClose: true, // 是否显示关闭按钮
            offset: 300 // 距离顶部高度
          })
        }
      }
    ).catch(
      err => {
        console.log(err);
      }
    );
  });
}
const toRegister = () => {
  console.log("去往注册页面");
}
</script>

<style scoped>

</style>
