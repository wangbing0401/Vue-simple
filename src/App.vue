<template>
  <div id="app">
    <div class="web_top">
      <img v-on:click="back()" src="./assets/ambow_logo.png">
      <span>----安博大学</span>
      <span>服务热线：<b>010-62068100</b></span>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back: function () {
      history.back()
    }
  }
}
</script>

<style lang="scss">
*, body{
  padding: 0; margin: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  .web_top{
    position: relative;
    width: 100%; height: 80px;
    border-bottom: 1px solid #e70019;
    img{
      height: 60%;
      margin-left: 10%;
      margin-top: 20px;
      cursor: pointer;
    }
    span:nth-of-type(1){
      position: relative;
      top: -10px;
      margin-left: 10px;
    }
    span:nth-of-type(2){
      position: absolute;
      right: 20%; margin-top: 40px;
      font-weight: bolder;
      b{
        color: #e70019;
      }
    }
  }
  .content{
    width: 1000px;
    margin: 40px auto;
    .page{
      .title{
        font-size: 20px;
        font-weight: bold;
        text-align: center;
      }
      .red_title{
        font-size: 16px;
        margin-top: 30px;
        margin-left: 20px;
        span{
          position: relative;
          top: -1px;
          margin-right: 10px;
          display: inline-block;
          width: 22px; height: 22px;
          text-align: center; line-height: 22px;
          border-radius: 50%;
          color: white;
          background-color: red;
        }
      }
      .sub_title{
        font-size: 14px;
        text-indent: 20px;
        color: #666666;
        margin-top: 10px;
        word-break:break-all;
      }
      .page_content{
        font-size: 14px;
        color: #666666;
        text-indent: 20px;
        margin-top: 10px;
      }
      .down_load{
        font-size: 14px;
        text-indent: 20px;
        margin-top: 10px;
        a{
          color: #e70019;
        }
      }
    }
  }
}
</style>
