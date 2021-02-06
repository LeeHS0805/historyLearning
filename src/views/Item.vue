<template>
    <transition name="item">
        <div class="item-container" v-if="show">
            <div class="item">
                <router-view></router-view>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Item",
        data(){
            return{
                show:false
            }
        },
        mounted() {
            this.show=true
        }
    }
</script>

<style scoped lang="less">
    .item-container{
        height: 100%;
        width: 100%;
        position: relative;
        background-image: url("https://tva1.sinaimg.cn/large/008eGmZEly1gndx2tsgthj30ku11216l.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin: auto;
        overflow: hidden;
        .item{
            height: 70%;
            width: 100%;
            margin-top: 110px;
        }
    }
    .item-enter{
        opacity: 0.1;
    }
    .item-enter-active{
        transition: .95s all ease-in-out;
    }

</style>
