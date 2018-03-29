
<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{$store.state.count}}</h3>
    </div>
</template>
<script>
    import store from '@/vuex/store'        //引用数据仓库
    export default{
        data(){
            return{
                msg:'Hello Vuex',
            }
        },
        store
    }
</script>