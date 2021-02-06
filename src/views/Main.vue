<template>
    <div class="main-container" >
       <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Main",
    }
</script>

<style scoped lang="less">

    .main-container{
        @media screen and (max-width: 500px){
            height: 100vh;
            width: 100vw;
        }
        @media screen and (min-width: 500px){
            height: 700px;
            width: 400px;
        }
        text-align: center;
        margin: auto;
        .main{
            position: relative;
            background-image: url("https://tva1.sinaimg.cn/large/008eGmZEly1gndx6a3sokj30ij0rsae4.jpg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            margin: auto;
            .logo{
                img {
                    width: 130px;
                    margin-top: 65px;
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
        @media screen and (max-width: 500px){
            .main{
                height: 100%;
                width: 100%;
            }
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
        transform: translateY(-90%) translateX(-2%) scale(3);
    }
</style>
