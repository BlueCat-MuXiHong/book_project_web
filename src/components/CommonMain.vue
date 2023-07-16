<template>
    <div class="commonMain">
        <div v-show="isShowMenuButton" style="margin: 0">
            <el-button type="primary" @click="changeIsShowMenu">展开</el-button>
        </div>
        <div>

            <div v-show="isShowMenu">
                <el-menu
                    default-active="0"
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#6a95b5"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    :collapse="isShowMenuButton">
                    <!--第一个菜单-->
                    <el-menu-item index="0" @click="pushBookType(0)">
                        <h3>首页</h3>
                    </el-menu-item>
                    <!--后端返回的动态菜单-->
                    <el-menu-item class="el-menu-item"
                                  v-for="item in bookTypeList"
                                  :key="item.id"
                                  :index="item.id.toString()"
                                  @click="pushBookType(item.id)">
                        <h3>{{ item.bookTypeName }}</h3>
                    </el-menu-item>
                </el-menu>
            </div>
        </div>

        <div class="bookInfoList">
            <BookInfoList :book-type="bookTypeInt"/>
        </div>

    </div>

</template>

<script>
import {getBookTypeList} from '@/api'
import BookInfoList from "@/components/BookInfoList.vue";

export default {
    components: {BookInfoList},
    data() {
        return {
            bookTypeInt: 0,
            bookTypeList: [],
            isShowMenuButton: false,
            isShowMenu:true,
            screenWidth: null,
        }
    },
    methods: {
        pushBookType(val) {
            this.bookTypeInt = val
        },
        changeIsShowMenu(){
            console.log(this.isShowMenu)
            this.isShowMenu = !this.isShowMenu
        }
    },
    mounted() {
        getBookTypeList().then(({data}) => {
            this.bookTypeList = data;
        }),
        //获取屏幕尺寸
        this.screenWidth = document.body.clientWidth
        window.onresize = () => {
            //屏幕尺寸变化
            return (() => {
                this.screenWidth = document.body.clientWidth
            })()
        }
    },
    watch: {
        screenWidth: function (n, o) {
            console.log(n)
            if (n <= 1200) {
                this.isShowMenuButton = true
                this.isShowMenu = false
            } else {
                this.isShowMenuButton = false
                this.isShowMenu = true
            }
        }
    }
}
</script>

<style scoped lang="less">
.commonMain{
    padding: 0;
}
.bookInfoList {
  max-width: 80%;
  margin: 30px auto;
}


.el-menu {
  max-width: 80%;
  //margin: 0 auto;

  h3 {
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 14px;
    font-weight: 400;
  }

  border: none;
}

.el-menu-item {
  width: 100px;
  border: none;
}
el-menu-demo{
    margin-left: 15px;
}
</style>
