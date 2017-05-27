import $http from 'axios'

import {Indicator} from 'mint-ui';


$http.default.timeout = 5000;
$http.defaults.headers.post['Content-Type'] = 'application/json'

const instance = $http.create();
instance.defaults.headers.post['Content-Type'] = 'application/json'

$http.interceptors.request.use = instance.interceptors.request.use


instance.interceptors.request.use(config => {
    Indicator.open({
        spinnerType: 'fading-circle'
    });

    if (localStorage.getItem('token')) {
        config.headers.Authorization = `token ${localStorage.getItem('token')}`.replace(/(^\")|(\"$)/g, '')
    }
    return config
}, err => {
    Indicator.open({
        spinnerType: 'fading-circle'
    });
    return Promise.reject(err)
})
// axios拦截响应
instance.interceptors.response.use(response => {
    Indicator.close();
    return response
}, err => {
    Indicator.close();
    return Promise.reject(err)
})

export default {
    // 获取热门场馆列表
    get_hot_venues_list(data) {
        return instance.post('/hot_venues_list', data)
    },
    // 获取场馆类型
    get_projects_list(data) {
        return instance.post('/projects_list', data)
    },
    // 获取特定场馆列表
    get_venues_list(data){
        return instance.post('/venues_list', data)
    }
}










