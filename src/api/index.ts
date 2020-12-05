import axios from 'axios'

let baseUrl = 'http://localhost:8080'

// 引导页
export function getYDaoImg() {
    return axios.get(`/index`)
}

// 首页
export function getHomeData() {
    return axios.get(`/home`)
}

// 书单详情页
export function getBookDetails(id=0) {
    return axios.get(`/bookDetails?id=${id}`)
}

// 探索页
export function getExploreData() {
    return axios.get(`/search`)
}