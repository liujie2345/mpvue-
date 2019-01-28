<template>
<div class="main">
  <div v-if="userinfo.openId" class="container">
    <div class="userinfo">
      <img :src="userinfo.avatarUrl" alt="">
      <p>{{userinfo.nickName}}</p>
    </div>
    <YearProgress></YearProgress>
    <button class="btn" @click="scanCode">添加图书</button>
  </div>
  <div v-else class="btl">
    <button open-type="getUserInfo" @click="getUserInfo">点击登陆</button>
  </div>
</div>
</template>

<script>
import YearProgress from '../../components/YearProgress'
import qcloud from 'wafer2-client-sdk'
import {get, showSuccess, post, showModel} from '../../utli.js'
import config from '../../config.js'
export default {
  components:{
    YearProgress
  },
  data () {
    return {
      userinfo:{
        avatarUrl: '../../../static/img/other.png',
        nickName: ''
      }
    }
  },
  methods: {
    async addBook (isbn) {
      const res = await post('/weapp/addbook', {
        isbn,
        openid:this.userinfo.openId
      })
      showModel('添加成功', `${res.title}`)
    },
    scanCode () {
      this.addBook('9787536685657')
    },
    getUserInfo () {
      qcloud.setLoginUrl(config.loginUrl)
      const self = this
      qcloud.login({
        success (userinfo) {
          qcloud.request({
            url:config.userUrl,
            login:true,
            success (userRes) {
              showSuccess('登陆成功')
              console.log(userRes)
              wx.setStorageSync('userinfo', userRes.data.data)
              self.userinfo = userRes.data.data
            }
          })
        },
        fail (err) {
          console.log("登陆失败" + err)
        }
      })
    }
  },
  onShow () {
    let userinfo = wx.getStorageSync('userinfo')
    if(userinfo) {
      this.userinfo = userinfo
    }
  }
}
</script>

<style lang="stylus">
.main
  display flex
  justify-content center
  .container
    display flex
    flex-direction column
    align-items center
    width 90%
    margin-top 100rpx
    .userinfo
      img
        width 400rpx
        height 400rpx
        border-radius 50%
        margin 0 auto
      p
        text-align center
        margin-top 20rpx
        margin-bottom 20rpx
    .btn
      width 400rpx
      height 100rpx
  .btl
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    button
      width 600rpx
      height 100rpx

</style>

