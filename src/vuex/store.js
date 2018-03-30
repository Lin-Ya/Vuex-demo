//这个store是数据商店的意思。，和状态管理器

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//在store.js文件中加入两个改变state的方法。
// 这里的mutations是固定的写法，意思是改变的，
// 我们要改变state的数值的方法，必须写在mutations里

//state是一个共享的状态对象
//获得状态的方法
const state = {
  count: 5
}

//改变状态的方法
const mutations = {
  add(state, n) {
    state.count += n;
  },
  reduce(state) {
    state.count --;
  }
}

//getters是一种在获取数据之前进行的一个过滤和加工
const getters = {
    count: function (state) {
			console.log('getters')
			return state.count += 0;
    }
}

//actions异步修改状态,可以在里面调用mutations中的方法
const actions = {
	addAction(context){
		context.commit('add',100);
		setTimeout(() => { context.commit('reduce') }, 3000);
		console.log('即将要执行异步')
	},
	reduceAction({ commit }) {
		commit('reduce')
	}
}

const moduleA = {
	state, mutations, getters, actions
}

export default new Vuex.Store({
	modules: { a: moduleA }
})
