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

      <div class="lists" v-on:click='tapList(item.id)' v-for="item in articles">
        <img v-bind:src="item.cover" />

        <span class="lists-content-title">{{ item.title }}</span>
        <span class="lists-content-title content">{{ item.intr }}</span>
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
    'nowMsg', 'articles'
  ],
  methods: {
    tapList: function (id) {
      this.$router.push({ path: '/info/' + id });
    }
  }
}
</script>
