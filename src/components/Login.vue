<template>
  <div class="container" :class="{'container':true,'sign-up-mode':isActive}">
    <div class="form-warp">
      <form class="sign-in-form">
        <h2 class="form-title">登录</h2>
        <el-form
            ref="form"
            label-width="140px"
            class="sign-in-form"
            :inline="true"
            :model="form"
            :rules="rules">
          <el-form-item prop="username">
            <el-input class="input2" placeholder="请输入账号" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" class="input2" placeholder="请输入密码" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="submit-btn" @click="submit">立即登录</div>
          </el-form-item>
        </el-form>
      </form>

      <form class="sign-up-form">
        <h2 class="form-title">注册</h2>
        <el-form
            ref="form"
            label-width="140px"
            class="sign-in-form"
            :inline="true"
            :model="form"
            :rules="rules">
          <el-form-item prop="username">
            <el-input class="input2" placeholder="请输入账号" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" class="input2" placeholder="请输入密码" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item prop="Email">
            <el-input type="Email" class="input2" placeholder="请输入密码" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item prop="text">
            <el-input  class="input2" placeholder="请输入密码" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="submit-btn" @click="submit">立即注册</div>
          </el-form-item>
        </el-form>


        <input placeholder="用户名"/>
        <input type="password" placeholder="密码"/>
        <div class="submit-btn">立即注册</div>
      </form>
    </div>

    <div class="desc-warp">
      <div class="desc-warp-item sign-up-desc">
        <div class="content">
          <button id="sign-up-btn" @click="sign_up_btn">注册</button>
        </div>
        <img src="../assets/imgs/log.svg" alt="">
      </div>
      <div class="desc-warp-item sign-in-desc">
        <div class="content">
          <button id="sign-in-btn" @click="sign_in_btn">登录</button>
        </div>
        <img src="../assets/imgs/register.svg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      form: {
        username: '',
        password: '',
        Email:'',
        checkCode:''
      },
      rules: {
        username: [{required: true, trigger: 'blur', message: '请输入用户名'}],
        password: [{required: true, trigger: 'blur', message: '请输入密码'}],
        Email: [{required: true, trigger: 'blur', message: '请输入用户名'}],
        checkCode: [{required: true, trigger: 'blur', message: '请输入密码'}]
      }
    }
  },
  methods: {
    sign_in_btn() {
      console.log(2)
      this.isActive = false;
    },
    sign_up_btn() {
      console.log(1)
      this.isActive = true;
    },
    submit() {

    }
  }
}

</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #333;
}

.container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}

.container::before {
  content: " ";
  position: absolute;
  width: 2000px;
  height: 2000px;
  border-radius: 50%;
  background-image: linear-gradient(-45deg, #6266f5 0%, #04befe 100%);
  transition: 1.8s ease-in-out;
  z-index: 6;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
}

.container.sign-up-mode::before {
  transform: translate(100%, -50%);
}

.form-warp {
  width: 50%;
  position: absolute;
  z-index: 5;
  left: 75%;
  top: 50%;
  z-index: 5;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr;
  transition: 1s 0.7s ease-in-out;
}

.form-warp form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  /* 将两个 form 布局在 grid 同一位置 */
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  transition: all 0.2s 0.7s;
  opacity: 1;
  z-index: 4;
}

.form-title {
  margin: 0 auto;
  color: #6266f5;
}

.form-warp .sign-up-form {
  opacity: 0;
  z-index: 3;
}

.container.sign-up-mode .form-warp {
  left: 25%;
}

.container.sign-up-mode .sign-in-form {
  opacity: 0;
  z-index: 3;
}

.container.sign-up-mode .sign-up-form {
  opacity: 1;
  z-index: 4;
}


::v-deep .input2 .el-input__inner {
  width: 300px;
  height: 42px;
  min-width: 300px;
  outline: none;
  padding: 12px 30px;
  line-height: 1;
  font-size: 16px;
  border-radius: 60px;
  color: #333;
  background-color: #6267f513;
  border: none;
}

input, .submit-btn {
  min-width: 300px;
  height: 42px;
  outline: none;
  padding: 12px 30px;
  line-height: 1;
  font-size: 16px;
  border-radius: 60px;
  color: #333;
  background-color: #6267f513;
  border: none;
}

input::placeholder {
  color: #cccc;
}

.submit-btn {
  background-color: #6266f5;
  color: #FFF;
  text-align: center;
  min-width: 150px;
  font-size: initial;
  font-weight: bold;
  letter-spacing: 1.5px;
  cursor: pointer;
}

.desc-warp {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.desc-warp-item {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  text-align: center;
  padding: 3rem 17% 2rem 12%;
  z-index: 6;
}

/* 事件穿透 BEGIN */
.sign-in-desc {
  pointer-events: none;
}

.sign-up-mode .sign-in-desc {
  pointer-events: all;
}

.sign-up-mode .sign-up-desc {
  pointer-events: none;
}

/* 事件穿透 END */
.content {
  width: 100%;
  transition: transform 0.9s ease-in-out;
  transition-delay: .6s;
}

.sign-in-desc img,
.sign-in-desc .content {
  transform: translateX(800px);
}

.sign-up-mode .sign-in-desc img,
.sign-up-mode .sign-in-desc .content {
  transform: translateX(0);
}

.sign-up-mode .sign-up-desc img,
.sign-up-mode .sign-up-desc .content {
  transform: translateX(-800px);
}

button {
  outline: none;
  padding: 6px 8px;
  min-width: 100px;
  text-align: center;
  border-radius: 30px;
  border: 2px solid #FFF;
  background: none;
  color: #FFF;
  cursor: pointer;
  transition: all .3s ease;
}

button:active {
  background: rgba(255, 255, 255, .1);
}

img {
  width: 100%;
  display: block;
  transition: transform 0.9s ease-in-out;
  transition-delay: .5s;
}

/* 响应式 */
@media screen and (max-width: 870px) {
  .container::before {
    width: 1500px;
    height: 1500px;
    transform: translateX(-50%);
    left: 30%;
    bottom: 68%;
    right: initial;
    top: initial;
    transition: 2s ease-in-out;
  }

  .container.sign-up-mode::before {
    transform: translate(-50%, 100%);
    bottom: 32%;
    right: initial;
  }

  .form-warp {
    width: 100%;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }

  .container.sign-up-mode .form-warp {
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0);
  }

  img {
    width: 200px;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.7s;
  }

  .desc-warp {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }

  .desc-warp-item {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
  }

  .sign-in-desc {
    grid-row: 3 / 4;
  }

  .sign-in-desc img,
  .sign-in-desc .content {
    transform: translateY(800px);
  }

  .sign-up-mode .sign-in-desc img,
  .sign-up-mode .sign-in-desc .content {
    transform: translateY(0);
  }

  .sign-up-mode .sign-up-desc img,
  .sign-up-mode .sign-up-desc .content {
    transform: translateY(-800px);
  }
}

@media screen and (max-width: 570px) {
  .container::before {
    bottom: 72%;
    left: 50%;
  }

  img {
    display: none;
  }
}
</style>
