<template>
  <div class="login_button">

    <img src="/static/images/IMG_2229.jpg">
    <div>
      <div class="login_welcome">NCL GO</div>
      <button class="login_btn" open-type="getUserInfo" @getuserinfo="getUserInfo">授权登录</button>
    </div>
  </div>
</template>

<script>
  import config from "../../config";

  export default {
    methods: {
      getUserInfo(e) {
        var _this = this
        console.log(e.target.userInfo)
        let currentUser = e.target.userInfo // 当前用户信息
        const loginUrl = config.loginUrl // Url信息
        // 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等。
        wx.login({
          // 接口调用成功的回调函数
          success (res) {
            console.log(res)
            if (res.code) {
              //发起网络请求
              wx.request({
                url: loginUrl, // 服务器接口地址
                // 请求的参数
                data: {
                  code: res.code
                },
                // 接口调用成功的回调函数
                success (loginRes) {
                  currentUser['openId'] = (JSON.parse(loginRes.data.msg))["openid"]
                  // 将数据存储在本地缓存中指定的 key 中; 存储用户信息
                  wx.setStorage({
                    key:"userinfo",
                    data:currentUser
                  })
                  // 将值传递给父组件index.vue
                  _this.$emit('loginsuccess')
                }
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .login_button{
    img {
      width: 400px;
      height: 220px;
    }
    align-self: center;
    justify-content: flex-start;
    .login_welcome{
      border: 0px;
      color: #322f3b;//龙葵紫
      background-color: #F5A362;
      text-align: center;
      position: relative;
      top: 20rpx;
      z-index: 99;
      width: 70vw;
      margin: auto;
      font-weight: bolder;
      font-family: "Times New Roman";
      font-size: 15px;
    }
    .login_btn{
      border-radius: 4px;
      background-color: #E97051;
      color: #322f3b;
      font-weight: lighter;
      width: 50vw;
      border: 2px solid #E85B33;
    }
  }
</style>
