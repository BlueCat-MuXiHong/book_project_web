<template>
    <div id="box">
        <el-form
            ref="form"
            label-width="70px"
            class="login-container"
            :inline="true"
            :model="form"
            :rules="rules">
            <h3 class="login_title">系统登录</h3>
            <el-form-item label="用户名" prop="username">
                <el-input placeholder="请输入账号" v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                username: 'admin',
                password: 'admin123'
            },
            rules: {
                username: [{require: true, trigger: 'blur', message: '请输入用户名'}],
                password: [{require: true, trigger: 'blur', message: '请输入用户名'}]
            }
        }
    },
    methods:{
        submit(){

        }
    }
}
</script>

<style scoped>
#box{
    width: 100%;
    height: 100vh;
    background-color: #12a182;
    background-image: url("/src/assets/imgs/img.png");
}

.login-container {
    width: 350px;
    border: 1px solid #eaeaea;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;
    box-sizing: border-box;
    text-align: center;
}

.el-input {
    width: 198px;
}

.login_title {
    text-align: center;
    margin-bottom: 40px;
    color: #505458;
}
</style>
