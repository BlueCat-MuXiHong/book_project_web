<template>
    <el-container class="main">
        <el-header>
            <CommonHead/>
        </el-header>
        <el-main>
            <CommonMain/>
        </el-main>
        <el-footer>
            <CommonFooter/>
        </el-footer>
    </el-container>
</template>

<script>
import CommonHead from "@/components/CommonHead.vue";
import CommonMain from "@/components/CommonMain.vue";
import CommonFooter from "@/components/CommonFooter.vue";

export default {
    data() {
        return {}
    },
    components: {
        CommonHead,
        CommonMain,
        CommonFooter
    }
}


</script>

<style scoped>
.el-header{
    padding: 0;
}
.main{
    background-color: #5cb3cc;
    background-image: url("../assets/imgs/img.png");
}

</style>