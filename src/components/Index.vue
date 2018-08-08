<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jackyang-title {
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 0;
  height: 45px;
  line-height: 45px;
  color: white;
  background-color: #4c4c4c;
}

.jackyang-content {
  width: 100%;
  margin-top: 45px;
}

.jackyang-banner {
  width: 100%;
}

.swiper-container {
  width: 100%;
}

.swiper-slide img {
  width: 100%;
  height: 225px;
}

.jackyang-gongge {
  margin-top: 0;
  height: 60px;
  box-shadow: 5px 5px 5px #888888;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.gongge-tag {
  float: left;
  width: 25%;
  background-color: white;
  background-position: center;
  height: 60px;
  background-size: 60px 60px;
  background-repeat: no-repeat;
  background-position: top;
}

.gongge-tag:first-child {
  background-image: url('/static/images/png.png');
}

.gongge-tag:nth-child(2) {
  background-image: url('/static/images/txt.png');
}

.gongge-tag:nth-child(3) {
  background-image: url('/static/images/mp4.png');
}

.gongge-tag:last-child {
  background-image: url('/static/images/gif.png');
}

.gongge-tag:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.gongge-tag:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.more-data {
  text-align: center;
  color: #4f4f4f;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  margin-bottom: 10px;
}
</style>


<template>
  <div class="hello">
    <div class="jackyang-title">
      <span>{{ msg }}</span>
    </div>
    <div class="jackyang-content">
      <div class="jackyang-banner">
        <!-- swiper-banner S -->
        <v-banner v-bind:banners="banners"></v-banner>
        <!-- swiper-banner E -->
      </div>

      <div class="jackyang-gongge">
        <span class="gongge-tag"></span>
        <span class="gongge-tag"></span>
        <span class="gongge-tag"></span>
        <span class="gongge-tag"></span>
      </div>

      <div class="jackyang-lists">
        <v-lists v-bind:nowMsg="nowMsg" v-bind:articles="articles"></v-lists>
        <div class="more-data" v-on:click="clickMore">
          <span>点击查看更多...</span>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import vBanner from './banner/swiper'
import vLists from './lists/listsContent'
import axios from 'axios'
import configGlobal from './../assets/config.js'

export default {
  name: 'Index',
  components: {
    'v-banner': vBanner,
    'v-lists': vLists,
  },
  data () {
    return {
      nowMsg: '最新看点>>',
      msg: '刺激战场',
      banners: [
        '/static/images/cbd.jpg',
        '/static/images/muwu.jpg',
        '/static/images/shuijiao.jpg',
        '/static/images/yuantiao.jpg'
      ],
      articles: []

    }
  },
  created () {
    var apiUrl = configGlobal.urlInfo.apiUrl;

    var self = this;
    axios.get(apiUrl + 'index').then(function (response) {
      var e = response.data;
      if (e.code == 0) {
        self.banners = e.data.banners
        self.articles = e.data.articles
      }
    }).catch(function (error) {
      console.log(error);
    });
  },
  methods: {
    clickMore: function () {
      this.$router.push({ path: 'lists' })
    }
  }
}
</script>

