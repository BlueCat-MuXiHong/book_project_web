import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/components/Login.vue";
import Main from '@/Views/Main.vue'
import BookInfoList from "@/components/BookInfoList.vue";
Vue.use(VueRouter)


const routes = [
    {
        path:'/login',
        component:Login,
        name:'Login'
    },
    {
        path: '/',
        component: Main,
        name: 'Main'
    },
    {
        path: '/bookInfoList',
        component: BookInfoList,
        name: 'BookInfoList'
    }
]
const router = new VueRouter({
    routes
})
export default router
