
<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{$store.state.count}}</h3>
        <h3>{{count}}</h3>
        <div>
            <!-- 需要改变状态，需要使用到cmooit发出通知调用mutations方法。 -->
            <!-- 注意，这里操作的是公用的数据仓库store.js里面的数据 -->
            <button v-on:click="$store.commit('add')">添加</button>
            <button v-on:click="$store.commit('reduce')">减少</button>
        </div>
    </div>
</template>
<script>
    import store from '@/vuex/store'        //引用数据仓库
    import {mapState} from 'vuex';          //需要加中括号
    export default{
        data(){
            return{
                msg:'Hello Vuex',
            }
        },
        computed: mapState({
                count:state=>state.count
        }),
        store
    }
</script>