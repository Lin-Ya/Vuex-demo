//这个store是数据商店的意思。，和状态管理器

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//在store.js文件中加入两个改变state的方法。
// 这里的mutations是固定的写法，意思是改变的，
// 我们要改变state的数值的方法，必须写在mutations里

//state是一个共享的状态对象
const state = {
    count: 5
}

const mutations = {
    add(state) {
        state.count++;
    },
    reduce(state) {
        state.count--;
    }
}


export default new Vuex.Store({
    state,   //状态
    mutations   //改变状态的方法
 
})