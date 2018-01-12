<template>
    <div id="onplay">
        <header>
            <span class="h-left" >&#65088;</span>
            <span class="h-right">&#10649;</span>
        </header>
        <div class="musicContent">
            <a href="javascript:" class="musicImg">
                <img  src="https://y.gtimg.cn/music/photo_new/T002R300x300M0000011K2LD2aPDmu.jpg?max_age=2592000" alt="">
            </a>
            <div class="titles">
                <h3 class="musicName">{{soundList.name}}</h3>
                <div class="singerName">{{soundList.name}}</div>
            </div>
        </div>
        <div class="w-progress">
            <mProgress></mProgress>
        </div>

        <div class="w-control">
            <mControl></mControl>
           
        </div>
    </div>
</template>

<script>
import mProgress from './m-progress.vue';
import mControl from './m-control.vue';
import axios from 'axios';
import qs from 'qs';

export default {
    data () {
        return {
            soundList: {}
        }
    },
    created () {
        var _this = this
        var id = location.search;
        var local_id=localStorage.getItem('sound_id');
        id= id.substring(4,id.length)||local_id;
        localStorage.setItem('sound_id',id);
        axios.post('http://www.lilunze.me/api/echo/index.php',qs.stringify({'url':"http://www.app-echo.com/api/sound/info?id="+id+"&comment=1"}))
        .then(function(res){
            _this.soundList = res.data.info
            console.log(_this.soundList)
        })
    },
    mounted () {
        var orderHeight=window.innerHeight;
        document.getElementById("onplay").style.height=orderHeight+'px';
  },
  components: {
      mProgress,
      mControl
  }
}
</script>

<style scoped>
#onplay {
    width: 100%;
}
    header {
        width: 100%;
        height: 50px;
        overflow: hidden;
        color: #555;
    }
        .h-left {
            float: left;
            line-height: 50px;
            margin-left: 12px;
        }
        .h-right {
            float: right;
            line-height: 50px;
            margin-right: 12px;
        }
    .musicContent {
        width: 100%;
        padding: 0 12px;
        box-sizing: border-box;
    }
        .musicImg {
            text-decoration: none;
            display: inline-block;
            width: 100%;
            height: 351.2px;
            font-size: 0;
            overflow: hidden;
        }
        .musicImg img {
            width: 100%;
        }
        .titles {
            text-align: center;
        }
        .musicName, .singerName {
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .titles .musicName {
            margin: 10px 0;
            font-size: 16px; 
        }
        .titles .singerName {
            font-size: 14px;
        }
    .w-progress {
        padding: 0 12px;
        box-sizing: border-box;
    }
    .w-control {
        width: 100%;
        padding: 0 12px;
        box-sizing: border-box;
    }
</style>
