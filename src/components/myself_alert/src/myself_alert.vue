<template>
  <div v-if="alertShow" class="alert_all">
    <div class="ceng"></div>
    <div class="alert_content">
      <img src="../../../assets/alert_icon.png">
      <div class="alert_line1">您的信息已提交</div>
      <div class="alert_line2">我们的客服将会第一时间与您取得联系，请耐心等待！</div>
      <div class="alert_button" v-on:click="alert_true()">我知道了</div>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
    }
  },
  props: {
    alertShow: Boolean
  },
  methods: {
    alert_true: function () {
      this.$emit('alertTrue')
    }
  }
}
</script>

<style lang="scss" scoped>
.alert_all{
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  .ceng{
    width: 100%; height: 100%;
    background-color: #333333;
    opacity: 0.6;
  }
  .alert_content{
    position: absolute;
    top: 50%; left: 50%;
    width: 354px; height: 190px;
    padding: 38px 33px 22px 33px;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    border-radius: 16px;
    background-color: white;
    z-index: 100;
    img{
      position: absolute;
      width: 45px;
      top: -24px; right: 20px;
    }
    .alert_line1{
      font-size: 20px; color: #e5001f;
    }
    .alert_line2{
      font-size: 15px; color: #313131;
      margin-top: 10px;
    }
    .alert_button{
      width: 80px; height: 28px;
      text-align: center; line-height: 28px;
      font-size: 15px; color: #e5001f;
      margin: 20px auto 0 auto;
      border: 1px solid #e5001f;
      border-radius: 3px;
      cursor: pointer;
    }
  }
}
</style>
