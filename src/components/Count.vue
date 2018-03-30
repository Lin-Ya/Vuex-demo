
<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{count}}</h3>
        <!-- 需要改变状态，需要使用到cmooit发出通知调用mutations方法。 -->
        <!-- 注意，这里操作的是公用的数据仓库store.js里面的数据 -->
        <div>
            <button v-on:click="$store.commit('add',10)">添加</button>
            <button v-on:click="reduce">减少</button>
        </div>
        <div>
            <button v-on:click="addAction">添加</button>
            <button v-on:click="reduceAction">减少</button>
        </div>
    </div>
</template>

<script>
    import store from '@/vuex/store' //引用数据仓库
    import {
        mapState,
        mutations,
        mapMutations,
        mapGetters,
        mapActions
    } from 'vuex'; //需要加中括号
    export default {
        data() {
            return {
                msg: 'Hello Vuex',
            }
        },
        methods:{
            ...mapMutations([  
                'add','reduce'
            ]),
            ...mapActions(['addAction','reduceAction'])
        },
        //当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
        computed: {
            // ...mapState(["count"])
            //...mapGetters(["count"])
            count(){
                return this.$store.state.a.count
            }
        },
        store
    }
</script>