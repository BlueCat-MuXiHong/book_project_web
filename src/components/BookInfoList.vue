<template>
  <div>
    <div v-show="false">首页</div>
    <div>
      <el-row :gutter="20">
        <el-col  class="el-col-model" :span="5" v-for="item in bookInfoList" :key="item.id">
          <el-card :body-style="{ padding: '0px',}">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px;height: 50px">
              <span>书名：{{ item.bookName }}</span>
              <span>作者：{{ item.bookAuthor }}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
<!--    <div>{{bookInfoList}}</div>-->
  </div>
</template>

<script>


import {getBookInfoList} from "@/api";

export default {
  props:['bookType'],
  data(){
    return{
      bookInfoList:[],
      bookInfoParams:{
        pageNo: 1,
        pageSize: 30,
        bookTypeList:[]
      }
    }
  },
  mounted() {
    this.bookInfoParams.bookTypeList.push(0)
  },
  watch:{
    bookType:function (newval){

      this.bookInfoParams.bookTypeList=[]
      this.bookInfoParams.bookTypeList.push(newval)
      getBookInfoList(this.bookInfoParams).then((data)=>{
        this.bookInfoList = data.data.list;
        console.log(this.bookInfoList)
      })
    }
  }
}



</script>

<style scoped>

.el-col-model{
  width: 10%;
  display: flex;
  margin-bottom: 20px;
  //margin-left: 30px;
  justify-content: center;
  //align-content: center;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
