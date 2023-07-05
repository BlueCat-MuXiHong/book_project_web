<template>
    <div class="header-container">
        <div class="r-content">
            <span class="el-dropdown-link">
                  <img class="userImg" src="../assets/imgs/user.png"/>
                </span>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                  <img class="userImg" src="../assets/imgs/user.png"/>
                </span>
                <el-dropdown-menu>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.header-container {
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .text {
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
  }

  .r-content {
    .userImg {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }

  .l-content {
    display: flex;
    align-items: center;
    /deep/.el-breadcrumb__item{
      .el-breadcrumb__inner{
        font-weight: normal;
        &.is-link{
          color: #666;
        }
      }
      &:last-child{
        .el-breadcrumb__inner{
          color: white;
        }
      }
    }
  }
}
</style>