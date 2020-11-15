<template>
  <div>
    <div v-if="notLogin" class="login_area">
      <login @loginsuccess="loginsuccess"></login>
    </div>
    <div v-else>
      <!--<van-search :value="value" placeholder="请输入搜索关键词" show-action @search="onSearch($e)" />-->
      <van-search :value="val" placeholder="请输入搜索关键词" show-action @search="onSearch"/>
      <div>
        <event></event>
      </div>
    </div>
  </div>
</template>

<script>
  import login from "../../components/index/login";
  import event from "../../components/index/event"

  export default {

    components: {
      login,
      event
    },
    data () {
      return {
        val: '',
        notLogin: true,
        imageURL: "https://thirdwx.qlogo.cn/mmopen/vi_32/pv6oGv8kico72icS59fY6Z2icaqna7Wu9GEEGkr25EN0GX2gned25zf6DCpQQPStCcOCJTAuOrZKicngExjB0RtT2A/132",
      }
    },

    onLoad(option) {
      if (option.logout === 'true') {
        this.notLogin = true
      }
      console.log(option.logout)
    },

    mounted() {
      if (wx.getStorageSync('userinfo')) {
        this.notLogin = false // 如果已存在用户信息，则隐藏登陆按钮
      } else {
        wx.hideTabBar() // 如果不存在用户信息, 隐藏底栏
      }
    },

    methods: {
      loginsuccess () {
        this.notLogin = false
        wx.showTabBar()
        wx.showToast({
          title: '登陆成功',
          icon: 'success',
          duration: 2000
        })
        console.log("登陆成功")
      },
      onSearch(e) {
        this.val = e.mp.detail
        console.log(this.val)
      }
    }
  }
</script>

<style scoped lang="scss">

  .login_area{
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #87CEFA;
  }

  .card{
    --card-background-color: #F5A362;
    --card-margin: 50px;
  }

</style>
