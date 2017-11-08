<template>
  <div class="contact_us_main">
    <div class="top_title"><span v-if="product_type_r" class="warn">!</span>请选择项目类别</div>
    <div class="product_line" v-on:click="select_product('教学内容和课程体系改革项目')">教学内容和课程体系改革项目<img v-if="product_array.indexOf('教学内容和课程体系改革项目')!=-1" src="../assets/hook.png" /></div>
    <div class="product_line" v-on:click="select_product('实践条件建设项目')">实践条件建设项目<img v-if="product_array.indexOf('实践条件建设项目')!=-1" src="../assets/hook.png" /></div>
    <div class="product_line" v-on:click="select_product('创新创业教育改革项目')">创新创业教育改革项目<img v-if="product_array.indexOf('创新创业教育改革项目')!=-1" src="../assets/hook.png" /></div>
    <div class="product_line" v-on:click="select_product('师资培训项目')">师资培训项目<img v-if="product_array.indexOf('师资培训项目')!=-1" src="../assets/hook.png" /></div>
    <div class="input_line">
      <span v-if="school_r" class="warn">!</span>
      学&nbsp;&nbsp;&nbsp;&nbsp;校 <input type="text" v-model="school">
    </div>
    <div class="input_line">
      <span v-if="deparment_r" class="warn">!</span>
      院&nbsp;&nbsp;&nbsp;&nbsp;系 <input type="text" v-model="department">
    </div>
    <div class="input_line">
      <span v-if="contact_person_r" class="warn">!</span>
      联系人 <input type="text" style="margin-left: 24px;" v-model="contact_person">
    </div>
    <div class="input_line">
      <span v-if="telephone_r" class="warn">!</span>
      电&nbsp;&nbsp;&nbsp;&nbsp;话 <input type="number" v-model="telephone">
    </div>
    <div class="input_line">
      <span v-if="email_r" class="warn">!</span>
      邮&nbsp;&nbsp;&nbsp;&nbsp;件 <input type="text" v-model="email">
    </div>
    <div class="commit_button" v-on:click="commit_click()">提交</div>
    <myself-alert :alertShow="alert_show" @alertTrue="alert_true"></myself-alert>
  </div>
</template>

<script>
import api from '../api/api'
import MyselfAlert from '../components/myself_alert'
export default{
  components: {
    MyselfAlert
  },
  data () {
    return {
      product_array: [],
      school: null,
      department: null,
      contact_person: null,
      telephone: null,
      email: null,
      alert_show: false,
      product_type_r: false,
      school_r: false,
      deparment_r: false,
      contact_person_r: false,
      telephone_r: false,
      email_r: false
    }
  },
  methods: {
    select_product: function (type) {
      if (this.product_array.indexOf(type) === -1) {
        this.product_array.push(type)
      } else {
        this.product_array.splice(this.product_array.indexOf(type), 1)
      }
    },
    commit_click: function () {
      this.product_type_r = false
      this.school_r = false
      this.deparment_r = false
      this.contact_person_r = false
      this.telephone_r = false
      this.email_r = false
      if (!this.product_array.length) {
        this.product_type_r = true
        return
      } else if (!this.school) {
        this.school_r = true
        return
      } else if (!this.department) {
        this.deparment_r = true
        return
      } else if (!this.contact_person) {
        this.contact_person_r = true
        return
      } else if (!this.telephone) {
        this.telephone_r = true
        return
      } else if (!this.email) {
        this.email_r = true
        return
      }
      const contact = {
        conName: this.contact_person,
        deptName: this.department,
        email: this.email,
        schName: this.school,
        telphone: this.telephone,
        items: this.product_array
      }
      api.contact_us(contact).then(res => {
        if (res) {
          this.alert_show = true
        }
      })
    },
    alert_true: function () {
      this.alert_show = false
      history.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.contact_us_main{
  width: 450px;
  margin: 67px auto;
  .top_title{
    position: relative;
    font-size: 20px;
    color: #acaaaa;
  }
  .product_line{
    position: relative;
    font-size: 20px;
    width: 100%; height: 40px;
    line-height: 40px;
    padding-left: 50px;
    margin-top: 20px;
    border: 1px solid #cfcdcd;
    cursor: pointer;
    img{
      float: right;
      margin-right: 20px; margin-top: 10px;
      width: 20px; height: 20px;
    }
  }
  .input_line{
    position: relative;
    font-size: 20px;
    color: #acaaaa;
    margin-top: 20px;
    input{
      width: 360px; height: 40px;
      color: black; font-size: 16px;
      padding-left: 15px;
      margin-left: 22px;
      border: 1px solid #cfcdcd;
      outline: none;
    }
  }
  .commit_button{
    width: 200px; height: 50px;
    text-align: center; line-height: 50px;
    font-size: 22px; color: white;
    margin: 70px auto;
    background-color: #e5031b;
    border-radius: 25px;
    cursor: pointer;
  }
}
.warn{
  position: absolute;
  font-size: 25px;
  color: red;
  left: -20px; top: -1px;
}
</style>
