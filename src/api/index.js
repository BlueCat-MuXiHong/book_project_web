import http from "@/utils/request";

export const getBookTypeList = ()=>{
    return http.get('/bookType/getBookTypeList')
}

export const getBookInfoList = (data)=>{
    return http.post('/bookInfo/getBookInfoList',data)
}