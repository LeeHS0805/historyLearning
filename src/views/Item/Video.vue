<template>
    <div class="video">
        <div class="head">党史微课</div>
        <video  controls="controls"
                pre autoplay
                webkit-playsinline
                playsinline
                poster="https://tva1.sinaimg.cn/large/008eGmZEly1gn94uh6ntij30np0ee121.jpg"
                x5-video-player-type="h5"
                x5-video-player-fullscreen="true"
                x5-video-orientation="portraint"
                src="http://flv4mp4.people.com.cn/videofile7/pvmsvideo/2020/12/25/SongHeLi_488c1b771d69704f8745972409f64528.mp4"></video>
    </div>
</template>

<script>
    export default {
        name: "Video"
    }
</script>

<style scoped lang="less">
    .video{
        height: 100%;
        width: 100%;
        padding-top: 40px;
        .head{
            font-size: 25px;
            font-weight: 500;
            letter-spacing: 3px;
        }
        video{
            width: 85%;
            margin-top: 60px;
        }
    }


</style>
