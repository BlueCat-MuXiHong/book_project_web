<template>
  <div>
    <div v-show="false">首页</div>
    <div>
      <el-row>
        <el-col  class="el-col-model" :span="5" v-for="item in bookInfoList" :key="item.id">
          <el-card :body-style="{ padding: '0px'}" >
            <img :src="item.bookImg" class="image">
            <div style="padding: 5px;height: 60px;font-size: 12px;overflow: hidden"  >
              <p style="width: 99%;overflow: hidden;">书名：{{ item.bookName }}</p>
              <p>作者：{{ item.bookAuthor }}</p>
              <p>状态：{{item.bookStatus==0?'连载':'完结'}}</p>
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
        pageSize: 20,
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
  width: 20%;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  align-content: center;
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
