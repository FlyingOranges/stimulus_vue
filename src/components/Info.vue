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

.article-content {
  padding-top: 5px;
  margin-top: 50px;
  color: #8f8f94;
  text-align: left;
  text-indent: 2em;
  font-size: 14px;
}

.article-content >>> img {
  display: block;
  text-align: center;
  margin: 0 auto;
  margin-top: 2px;
  width: 95%;
}
</style>

<template>
  <div>
    <div class="jackyang-title">
      <span>{{ msg }}</span>
    </div>

    <div class="article-content" v-html="content">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import configGlobal from './../assets/config.js'

export default {
  name: 'Info',
  data () {
    return {
      msg: '此去关山路远，愿卿一生珍重',
      content: ''
    }
  },
  created () {
    var self = this;
    var apiUrl = configGlobal.urlInfo.apiUrl;

    var id = this.$route.params.id;

    axios.get(apiUrl + 'article/info/' + id).then(function (response) {
      var e = response.data;
      if (e.code == 0) {
        self.msg = e.data.title;
        self.content = e.data.conent;
      }
    }).catch(function (error) {
      console.log(error);
    });

    var con = '<p>以前曾经无数次想过,再遇到她我该有怎样的表现才算完美</p>\n<p>是熟视无睹,插肩而过</p>\n<p>还' +
      '是相视一笑,一笑泯恩仇</p>\n<p>或者是牵着女朋友的手,告诉她我离开她只会过得更好</p>\n<p>可是在好几' +
      '年以后,我却发现,在这个并不大的城市里,我没竟然一次都没有再遇到过,一次都没有</p>\n<p>也许这就是上天给的最好的结果</p>';
    var reg = new RegExp("\n", "g");

    var str = con.replace(reg, "<br>");
    this.content = str;
  }

}
</script>


