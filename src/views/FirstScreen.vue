<template>
    <transition name="main">
        <div class="main" v-if="show">
            <div class="logo">
                <transition name="logo">
                    <img src="../assets/scse.png" :class="shake" alt="" v-if="show">
                </transition>
            </div>
            <div class="text">
                点击党徽开始学习
            </div>
            <button @click="go('/nav')"></button>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "FirstSCreen",
        data(){
            return{
                show:false,
                shake:''
            }
        },
        methods:{
            go(path){
                this.show=false
                setTimeout(()=>{
                    this.$router.push(path)
                },400)
            }
        },
        mounted() {
            this.show=true
            setTimeout(()=>{
                this.shake ='imgShake'
            },400)
        }
    }
</script>

<style scoped lang="less">
    .main{
        width: 100%;
        height: 100%;
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin: auto;
        .logo{
            img{
                width: 130px;
                margin-left: -180px;
                margin-top: 55px;
            }
            .imgShake{
                animation: zy .5s .15s linear infinite;
                -moz-animation: zy .5s .15s linear  ; /* Firefox */
                -webkit-animation: zy .5s .15s linear ; /* Safari and Chrome */
                -o-animation: zy .5s .15s linear ; /* Opera */
            }
            @-webkit-keyframes zy{
                0% {
                    opacity: 0.7;
                    transform: rotate(0deg);
                }
                25% {
                    opacity: 1;
                    transform: rotate(-15deg);
                }
                75% {
                    opacity: 0.8;
                    transform: rotate(15deg);
                }
                50%{
                    opacity: 0.75;
                    transform: rotate(0deg);
                }
                100% {
                    opacity: 1;
                    transform: rotate(0deg);
                }
            }
            @-moz-keyframes zy{
                0% {
                    opacity: 0.7;
                    transform: rotate(0deg);
                }
                25% {
                    opacity: 1;
                    transform: rotate(-15deg);
                }
                75% {
                    opacity: 0.8;
                    transform: rotate(15deg);
                }
                50%{
                    opacity: 0.75;
                    transform: rotate(0deg);
                }
                100% {
                    opacity: 1;
                    transform: rotate(0deg);
                }
            }
        }
        .text{
            width: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 20px;
            letter-spacing: 2px;
            font-size: 18px;
            font-weight: 500;
            color: rgba(241, 241, 241, 0.78);
        }
        button{
            position: absolute;
            left: 50%;
            bottom: 95px;
            transform: translateX(-50%);
            width: 60px;
            height: 60px;
            border: none;
            outline: none;
            background-color: transparent;
            border-radius: 50%;
        }
    }

    .main-enter{
        transform: translateX(300px) scale(.4);

    }
    .main-enter-active{
        transition: .56s all ease-in-out;
    }
    .main-leave-active{
        transition: .4s all ease-in-out;
    }
    .main-leave-to{
        opacity: 0.2;
        transform: translateY(-80%) translateX(-2%) scale(3);
    }
</style>
