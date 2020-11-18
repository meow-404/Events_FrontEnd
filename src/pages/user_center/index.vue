<template>
  <div>
<!--    <img :src="/currentUser.avatarUrl" alt="">-->
    <div class="avatar-container">
      <img :src="currentUser.avatarUrl" alt="">
      <div>{{currentUser.nickName}}</div>
    </div>

    <van-tabs animated>
      <van-tab title="我的发布">内容 1</van-tab>
      <van-tab title="我的收藏">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
    </van-tabs>

    <div class="btn">
      <button class="logout" @click="logout">退出登陆</button>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        currentUser: {}
      }
    },

    mounted() {
      if (wx.getStorageSync('userinfo')) {
        //console.log('进入用户中心')
        this.currentUser = wx.getStorageSync('userinfo')
      } else {
        console.log('异常登录进入进入')
      }
    },

    methods: {
      logout() {
        wx.removeStorage({
          key: 'userinfo',
          success(res) {
            //console.log(res)
            wx.hideTabBar()
            wx.reLaunch({
              url: '/pages/index/main?logout=true'
            })
            wx.showToast({
              title: '退出登陆',
              icon: 'success',
              duration: 1000
            })
          }
        })
      }
    }
  }
</script>

<style lang="scss">

  .avatar-container {
    background-color: #87CEFA;
    padding: 10px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 99px;
      box-shadow: 1px 1px 2px #322f3b;
      border: 1px solid #e2e1e4;
    }
    div {
      display: inline-block;
      color: #FFFFFF;
      font-size: 40rpx;
      font-family: "Lucida Grande";
    }
  }
  .user-options {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 2px #322f3b;
    border: 1px solid #e2e1e4;
    display: flex;
    justify-content: space-between;
    font-weight: lighter;

    .left-msg {
      height: 45px;
      font-size: 20px;
      padding-left: 15px;
      line-height: 45px;
    }

    .right-msg {
      height: 45px;
      font-size: 20px;
      padding-right: 15px;
      line-height: 45px;
    }
  }

  .btn {
    position: fixed;
    bottom: 10px;
    margin-left: 35%;
    .logout {
      height: 45px;
      line-height: 45px;
      font-size: 15px;
      font-weight: bolder;
      margin-top: 10px;
      margin-left: 10px;
      margin-right: 10px;
      border-radius: 10px;
      box-shadow: 1px 1px 2px #322f3b;
      border: 1px solid #e2e1e4;
      justify-content: space-between;
      background-color: #FFFFFF;
      color: crimson;
      text-align: center;
    }
  }

</style>
