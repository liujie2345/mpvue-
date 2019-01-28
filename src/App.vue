<script>
import {get} from './utli.js'
import qcloud from 'wafer2-client-sdk'
import config from './config.js'
export default {
  async created() {
    // qcloud.setLoginUrl(config.loginUrl);
    // qcloud.login({
    //   success: function (userInfo) {
    //     console.log('登陆成功', userInfo)
    //   },
    //   fail:function (err) {
    //     console.log('登陆失败', err)
    //   }
    // })

    // const res = await get('/weapp/demo')
    // console.log(123, res)
  }
}
</script>

<style>
.text-primary{
  color: #EA5149
}
.text-footer{
  text-align: center;
  font-size: 12px;
}
</style>
