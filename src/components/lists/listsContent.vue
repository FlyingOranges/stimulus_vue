<style scoped>
.lists-title {
  text-align: left;
  width: 100%;
  margin-left: 1em;
  margin-top: 5px;
  font-size: 14px;
  display: inline-block;
}

.lists-title a {
  color: #4f4f4f;
  text-decoration: none;
}

.lists-content {
  text-align: left;
}

.lists {
  border-top: 1px solid #e0e0e0;
  width: 100%;
  height: 60px;
  background-color: white;
}

.lists img {
  height: 60px;
  position: absolute;
}

.lists-content-title {
  position: absolute;
  margin-left: 70px;
  margin-top: 10px;
  font-size: 15px;
  color: #4f4f4f;
}

.lists-content-title.content {
  margin-top: 35px;
  font-size: 13px;
  color: #757575;
  text-indent: 10px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 300px;

  pointer-events: none;
}

.more-data {
  text-align: center;
  color: #4f4f4f;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}
</style>

<template>
  <div>
    <div class="lists-title">
      <a href="javasrckpt:void(0);">{{ nowMsg }}</a>
    </div>
    <div class="lists-content">
      <div class="lists">
        <img src="/static/images/60x60.gif" />

        <span class="lists-content-title">夏日搭配哪家强,教你完成变身大作战</span>
        <span class="lists-content-title content">你会不会真的以为我要做一个穿衣打扮的操作吧</span>
      </div>
      <div class="lists">
        <img src="/static/images/60x60.gif" />

        <span class="lists-content-title">你喜欢大海，我爱过你</span>
        <span class="lists-content-title content">阚清子和纪凌尘不得不说的故事</span>
      </div>

      <div class="lists">
        <img src="/static/images/60x60.gif" />

        <span class="lists-content-title">幸福,就是如此简单的事情</span>
        <span class="lists-content-title content">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</span>
      </div>
      <div class="lists">
        <img src="/static/images/60x60.gif" />

        <span class="lists-content-title">CBD天气简直是要热死人</span>
        <span class="lists-content-title content">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</span>
      </div>

      <div class="lists">
        <img src="/static/images/60x60.gif" />

        <span class="lists-content-title">幸福,就是如此简单的事情</span>
        <span class="lists-content-title content">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</span>
      </div>
      <div class="lists">
        <img src="/static/images/60x60.gif" />

        <span class="lists-content-title">CBD天气简直是要热死人</span>
        <span class="lists-content-title content">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</span>
      </div>

      <div class="lists">
        <img src="/static/images/60x60.gif" />

        <span class="lists-content-title">幸福,就是如此简单的事情</span>
        <span class="lists-content-title content">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</span>
      </div>
      <div class="lists">
        <img src="/static/images/60x60.gif" />

        <span class="lists-content-title">CBD天气简直是要热死人</span>
        <span class="lists-content-title content">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ListsContent',
  data () {
    return {
      moreMsg: '点击查看更多...',
    }
  },
  props: [
    'nowMsg'
  ],
  methods: {

  }
}
</script>
