<template>
    <div>
        <div>
            <el-menu
                    default-active="0"
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#6a95b5"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="0">
                    <h3>首页</h3>
                </el-menu-item>
                <el-menu-item class="el-menu-item"
                        v-for="item in bookTypeList"
                        :key="item.id"
                        :index="item.id.toString()"
                        @click="pushBookType(item.id)">
                    <h3>{{item.bookTypeName}}</h3>
                </el-menu-item>
            </el-menu>
        </div>

        <div>
            <router-view/>
        </div>
    </div>

</template>

<script>
import {getBookTypeList,getBookInfoList} from '@/api'
  export default {
      data(){
          return{
              bookTypeList:[],
              bookInfoParams:{
                  pageNo: 1,
                  pageSize: 10,
                  bookTypeList:[]
              }
          }
      },
      methods:{
          pushBookType(val){
              if (val==='0'){
                  console.log('首页')
              }
              this.bookInfoParams.bookTypeList.push(val);
              getBookInfoList(this.bookInfoParams).then((data)=>{
                  console.log(this.bookInfoParams)
                  console.log(data)
              })
          }
      },
      mounted() {
          getBookTypeList().then(({data})=>{
              this.bookTypeList = data;
          })
      }
  }
</script>

<style scoped lang="less">
.el-menu{
  h3{
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 14px;
    font-weight: 400;
  }
  .el-menu-item{
    display: flex;
    flex-direction: row;
  }
  border: none;

}
.el-menu-item {
  width: 100px;
  border: none;
}
</style>